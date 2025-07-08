// Mobile navigation toggle for overlay
// Show overlay when nav-list-btn is clicked, hide when close is clicked or overlay is clicked

document.addEventListener('DOMContentLoaded', function() {
  const navBtn = document.querySelector('.nav-list-btn');
  const navOverlay = document.querySelector('.nav-overlay');
  const navClose = document.querySelector('.nav-overlay-close');

  if (navBtn && navOverlay && navClose) {
    navBtn.addEventListener('click', function() {
      navOverlay.classList.add('active');
    });
    navClose.addEventListener('click', function() {
      navOverlay.classList.remove('active');
    });
    navOverlay.addEventListener('click', function(e) {
      if (e.target === navOverlay) {
        navOverlay.classList.remove('active');
      }
    });
  }
});

// Aside modal toggle for aside icon button
// Show modal when asideIconBtn is clicked, hide when close is clicked or outside modal is clicked

document.addEventListener('DOMContentLoaded', function() {
  const asideBtn = document.getElementById('asideIconBtn');
  const asideModal = document.getElementById('asideModal');
  const asideClose = document.querySelector('.aside-modal-close');

  if (asideBtn && asideModal && asideClose) {
    asideBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      asideModal.classList.add('open');
    });
    asideClose.addEventListener('click', function() {
      asideModal.classList.remove('open');
    });
    // Close modal if clicking outside the modal content
    document.addEventListener('click', function(e) {
      if (asideModal.classList.contains('open')) {
        const content = asideModal.querySelector('.aside-modal-content');
        if (!content.contains(e.target) && e.target !== asideBtn) {
          asideModal.classList.remove('open');
        }
      }
    });
    // Prevent click inside modal from closing
    asideModal.querySelector('.aside-modal-content').addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Tab navigation for aside modal
  const tabNav = document.getElementById('tabNav');
  const tabTxts = asideModal.querySelectorAll('.tabTxt');
  const tabNavItems = tabNav ? tabNav.querySelectorAll('.tabNavItem') : [];

  function showTab(tabName) {
    tabTxts.forEach(function(tab) {
      tab.style.display = 'none';
    });
    const tabId = {
      'Content': 'asideContents',
      'Credits': 'asideCredits',
      'Tools': 'asideTools',
      'About': 'asideAbout'
    }[tabName];
    if (tabId) {
      const tabSection = asideModal.querySelector('#' + tabId);
      if (tabSection) tabSection.style.display = '';
    }
  }

  if (tabNavItems.length > 0) {
    // Set default tab
    showTab('Content');
    tabNavItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Remove active class from all
        tabNavItems.forEach(i => i.classList.remove('active'));
        // Add active to clicked
        item.classList.add('active');
        showTab(item.textContent.trim());
      });
    });
  }
});
