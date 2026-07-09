console.log('This site intentionally contains test problems.');

// Intentional console error for testing.
setTimeout(() => {
  try {
    window.thisFunctionDoesNotExist();
  } catch (error) {
    console.error('Intentional bad-site JavaScript error:', error.message);
  }
}, 500);

// Intentional layout shift.
setTimeout(() => {
  const banner = document.createElement('div');
  banner.textContent = 'Late-loading banner that causes layout shift';
  banner.style.height = '90px';
  banner.style.background = '#fafafa';
  document.body.insertBefore(banner, document.body.firstChild);
}, 1200);
