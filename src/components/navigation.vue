<template>
  <div class="navigation-container1">
    <div class="navigation-container2">
      <div class="navigation-container3">
        <DangerousHTML
          html="<style>
  @media (prefers-reduced-motion: reduce) {
  .navigation, .navigation-link, .navigation-toggle, .navigation-close, .navigation-mobile-link {
    transition: none;
  }
  .navigation-mobile-menu-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .navigation-link::after, .navigation-mobile-link::before {
    transition: none;
  }
  }
  </style>"
        ></DangerousHTML>
      </div>
    </div>
    <nav id="navigation" class="navigation">
      <div class="navigation-container">
        <a href="#">
          <div class="navigation-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              class="navigation-brand-icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
              ></path>
            </svg>
            <span class="section-title">EverAfterPage</span>
          </div>
        </a>
        <ul class="navigation-menu">
          <li class="navigation-menu-item">
            <a href="#">
              <div class="navigation-link"><span>Our Story</span></div>
            </a>
          </li>
          <li class="navigation-menu-item">
            <a href="#">
              <div class="navigation-link"><span>Gallery</span></div>
            </a>
          </li>
          <li class="navigation-menu-item">
            <a href="#">
              <div class="navigation-link"><span>Event Details</span></div>
            </a>
          </li>
          <li class="navigation-menu-item">
            <a href="#">
              <div class="navigation-link"><span>RSVP</span></div>
            </a>
          </li>
          <li class="navigation-menu-item">
            <a href="#">
              <div class="navigation-link"><span>Registry</span></div>
            </a>
          </li>
        </ul>
        <button
          id="navigationToggle"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          class="navigation-toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5h16M4 12h16M4 19h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <div id="navigationMobileOverlay" class="navigation-mobile-overlay">
      <div class="navigation-mobile-header">
        <a href="#">
          <div class="navigation-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              class="navigation-brand-icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
              ></path>
            </svg>
            <span class="section-title">EverAfterPage</span>
          </div>
        </a>
        <button
          id="navigationClose"
          aria-label="Close navigation menu"
          class="navigation-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6L6 18M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="navigation-mobile-menu">
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>Our Story</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>Gallery</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>Event Details</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>RSVP</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>Registry</span></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation-container4">
      <div class="navigation-container5">
        <DangerousHTML
          html="<style>
          @keyframes slideInLeft {to {opacity: 1;
  transform: translateX(0);}}
          </style> "
        ></DangerousHTML>
      </div>
    </div>
    <div class="navigation-container6">
      <div class="navigation-container7">
        <DangerousHTML
          html="<script defer data-name='navigation-toggle'>
  (function(){
    const navigationToggle = document.getElementById('navigationToggle')
    const navigationClose = document.getElementById('navigationClose')
    const navigationMobileOverlay = document.getElementById(
      'navigationMobileOverlay'
    )
  
    function openMobileMenu() {
      navigationMobileOverlay.classList.add('is-open')
      navigationToggle.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
    }
  
    function closeMobileMenu() {
      navigationMobileOverlay.classList.remove('is-open')
      navigationToggle.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
    }
  
    navigationToggle.addEventListener('click', openMobileMenu)
    navigationClose.addEventListener('click', closeMobileMenu)
  
    const mobileLinks = navigationMobileOverlay.querySelectorAll(
      '.navigation-mobile-link'
    )
    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu)
    })
  })()
  </script>"
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Navigation',
  props: {},
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.navigation-container1 {
  display: contents;
}
 
.navigation-container2 {
  display: none;
}
 
.navigation-container3 {
  display: contents;
}
 
.navigation-container4 {
  display: none;
}
 
.navigation-container5 {
  display: contents;
}
 
.navigation-container6 {
  display: none;
}
 
.navigation-container7 {
  display: contents;
}
</style>
