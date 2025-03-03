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
      // Hide the next button if advancing one more page would overshoot by only a few pixels.
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

  function updatePage() {
    content.scrollTo({
      left: currentPage * pageWidth,
      behavior: 'smooth'
    });
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
    const swipeThreshold = 100; // Minimum swipe distance in pixels

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
  // Add a fade-in class to the main container or body
  document.body.classList.add('fade-in');
});