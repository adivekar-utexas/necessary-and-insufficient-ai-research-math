window.addEventListener("load", function () {
  const content = document.getElementById("content");
  const pageNumberElement = document.getElementById("pageNumber");
  if (!content) {
    console.error("Content container not found");
    return;
  }

  // Use the container's clientWidth as the page width.
  let pageWidth = content.clientWidth;
  let totalPages = Math.ceil(content.scrollWidth / pageWidth);
  let currentPage = 0;

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Update the visibility of navigation buttons based on current page.
  function updateButtonsVisibility() {
    if (prevButton) {
      prevButton.style.visibility = currentPage === 0 ? "hidden" : "visible";
    }
    if (nextButton) {
      nextButton.style.visibility = currentPage === totalPages - 1 ? "hidden" : "visible";
    }
  }

  // Update the page number display.
  function updatePageNumber() {
    if (pageNumberElement) {
      pageNumberElement.textContent = "[" + (currentPage + 1) + "/" + totalPages + "]";
    }
  }

  // Function to update the page: scroll to the appropriate column, update buttons and page number.
  function updatePage() {
    content.scrollTo({
      left: currentPage * pageWidth,
      behavior: 'smooth'
    });
    updateButtonsVisibility();
    updatePageNumber();
  }

  // Navigation using buttons.
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        updatePage();
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage();
      }
    });
  }

  // Navigation using keyboard (arrow keys and page up/down).
  document.addEventListener("keydown", function (e) {
    if ((e.key === "ArrowLeft" || e.key === "PageUp") && currentPage > 0) {
      currentPage--;
      updatePage();
    }
    else if ((e.key === "ArrowRight" || e.key === "PageDown") && currentPage < totalPages - 1) {
      currentPage++;
      updatePage();
    }
  });

  // Update dimensions on window resize.
  window.addEventListener("resize", function () {
    pageWidth = content.clientWidth;
    totalPages = Math.ceil(content.scrollWidth / pageWidth);
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
    const swipeThreshold = 50; // Minimum swipe distance in pixels.

    if (window.innerHeight > window.innerWidth && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0 && currentPage < totalPages - 1) {
        // Swipe left: move to next page.
        currentPage++;
        updatePage();
      } else if (deltaX > 0 && currentPage > 0) {
        // Swipe right: move to previous page.
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