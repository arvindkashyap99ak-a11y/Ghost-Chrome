document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backToOptions');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // If extension context allows, try to close the tab
      if (chrome?.tabs && chrome.tabs.getCurrent) {
        chrome.tabs.getCurrent((tab) => {
          if (tab?.id) {
            chrome.tabs.remove(tab.id);
          } else {
            // fallback if can't close directly
            window.location.href = 'options.html';
          }
        });
      } else {
        // fallback for normal navigation
        window.location.href = 'options.html';
      }
    });
  }
});
