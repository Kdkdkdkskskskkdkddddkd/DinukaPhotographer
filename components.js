const navigationHTML = `
  <header>
    <a href="index.html" class="logo">Dinuka.</a>
    <div class="menu-toggle" id="mobile-menu">
      <i class="fas fa-bars">☰</i>
    </div>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="wedding.html">Wedding</a></li>
      <li><a href="birthday.html">Birthday</a></li>
      <li><a href="homecoming.html">Homecoming</a></li>
      <li><a href="engagement.html">Engagement</a></li>
      <li><a href="casual.html">Casual</a></li>
      <li><a href="extras.html">Extras</a></li>
    </ul>
  </header>
`;

const footerHTML = `
  <footer>
    <div class="footer-content">
      <h2 class="footer-logo">Dinuka Photographer</h2>
      <p style="color: var(--color-text-muted); font-style: italic; max-width: 400px;">
        Capturing your most precious moments with elegance and timeless beauty.
      </p>
      <div class="social-links">
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Twitter">TW</a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; ${new Date().getFullYear()} Dinuka Photographer. All Rights Reserved.
    </div>
  </footer>
`;

// Inject Header and Footer
document.addEventListener('DOMContentLoaded', () => {
  // Inject Header
  const headerContainer = document.getElementById('header-placeholder');
  if (headerContainer) {
    headerContainer.innerHTML = navigationHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
  }

  // Inject Footer
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Active Link Highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navLinksContainer = document.getElementById('nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
  }
});
