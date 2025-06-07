window.addEventListener("load", function () {
  const content = document.getElementById("content");
  const pageNumberElement = document.getElementById("pageNumber");
  if (!content) {
    console.error("Content container not found");
    return;
  }

  let pageWidth = content.clientWidth;
  const tolerance = 5; // pixels of tolerance to avoid fractional overflow issues
  let currentPage = 0;

  // Custom easing function (ease-out quadratic)
  function easeOut(t) {
    return t; // Linear
    // return t * (2 - t);  // Quadratic
    // return 1 - Math.pow(1 - t, 3); // Cubic
  }

  // Animate the scrollLeft property of an element from its current value to target within duration (ms)
  function animateScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
  
    function animate() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      element.scrollLeft = start + change * easedProgress;
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    }
    // Start the animation immediately.
    animate();
  }

  // Compute total pages, using tolerance to avoid a phantom extra page.
  function computeTotalPages() {
    return Math.floor((content.scrollWidth + tolerance) / pageWidth);
  }

  let totalPages = computeTotalPages();

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Update navigation buttons: hide prev if first, hide next if near the end.
  function updateButtonsVisibility() {
    if (prevButton) {
      prevButton.style.visibility = currentPage === 0 ? "hidden" : "visible";
    }
    if (nextButton) {
      if ((currentPage + 1) * pageWidth >= content.scrollWidth - tolerance) {
        nextButton.style.visibility = "hidden";
      } else {
        nextButton.style.visibility = "visible";
      }
    }
  }

  // Update the page number display.
  function updatePageNumber() {
    totalPages = computeTotalPages();
    if (pageNumberElement) {
      pageNumberElement.textContent = "[" + (currentPage + 1) + "/" + totalPages + "]";
    }
  }

  // Updated updatePage uses custom animation for a faster scroll.
  function updatePage() {
    let PAGE_TURN_DURATION_MS = 150;
    // Animate with a short duration in milliseconds:
    animateScrollTo(content, currentPage * pageWidth, PAGE_TURN_DURATION_MS);
    updateButtonsVisibility();
    updatePageNumber();
  }

  // Button navigation.
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        updatePage();
      }
    });

    nextButton.addEventListener("click", function () {
      if ((currentPage + 1) * pageWidth < content.scrollWidth - tolerance) {
        currentPage++;
        updatePage();
      }
    });
  }

  // Keyboard navigation.
  document.addEventListener("keydown", function (e) {
    if ((e.key === "ArrowLeft" || e.key === "PageUp") && currentPage > 0) {
      currentPage--;
      updatePage();
    } else if ((e.key === "ArrowRight" || e.key === "PageDown") && (currentPage + 1) * pageWidth < content.scrollWidth - tolerance) {
      currentPage++;
      updatePage();
    }
  });

  // Recalculate dimensions on window resize.
  window.addEventListener("resize", function () {
    pageWidth = content.clientWidth;
    totalPages = computeTotalPages();
    if ((currentPage + 1) * pageWidth >= content.scrollWidth - tolerance) {
      currentPage = Math.max(0, totalPages - 1);
    }
    updatePage();
  });

  // Swipe functionality for portrait mode.
  let touchStartX = null;
  content.addEventListener("touchstart", function (e) {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  });

  content.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = Math.floor(0.35 * content.scrollWidth); // Minimum swipe distance in pixels

    if (window.innerHeight > window.innerWidth && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0 && (currentPage + 1) * pageWidth < content.scrollWidth - tolerance) {
        currentPage++;
        updatePage();
      } else if (deltaX > 0 && currentPage > 0) {
        currentPage--;
        updatePage();
      }
    }
    touchStartX = null;
  });

  // Initial update.
  updateButtonsVisibility();
  updatePageNumber();
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('fade-in');
});
