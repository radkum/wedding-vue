<template>
  <div class="navigation-contents">
    <div class="navigation-display-none">
      <div class="navigation-contents">
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
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              class="navigation-brand-icon"
            >
              <path
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="section-title">Wesele</span>
          </div>
        </a>
        <div class="hero-nav">
          <a href="registration">
            <div class="showcase-countdown-label"><span>RSVP</span></div>
          </a>
          <a href="#church">
            <!-- <div class="hero-nav-link"><span>Kościół</span></div>-->
            <div class="showcase-countdown-label"><span>Kościół</span></div>
          </a>
          <a href="#wedding_hall">
            <div class="showcase-countdown-label"><span>Sala</span></div>
          </a>
          <a href="#timeline">
            <div class="showcase-countdown-label"><span>Plan </span></div>
          </a>
          <a href="photos">
            <div class="showcase-countdown-label"><span>Zdjęcia</span></div>
          </a>
        </div>
        <div class="showcase-countdown">
          <div class="showcase-countdown-item">
            <span id="countdown-days" class="showcase-countdown-value">
              <slot name="daysValue">
                <!--Default content for showcaseCountdownValue-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{ days }}</span>
                </div>
              </slot>
            </span>
            <span class="showcase-countdown-label">
              <slot name="daysStringLabel">
                <!--Default content for showcaseCountdownLabel-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{days_string}}</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="showcase-countdown-item">
            <span id="countdown-hours" class="showcase-countdown-value">
              <slot name="hoursValue">
                <!--Default content for showcaseCountdownValue1-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{ hours }}</span>
                </div>
              </slot>
            </span>
            <span class="showcase-countdown-label">
              <slot name="hoursStringLabel">
                <!--Default content for showcaseCountdownLabel1-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{ hours_string }}</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="showcase-countdown-item">
            <span id="countdown-minutes" class="showcase-countdown-value">
              <slot name="minutesValue">
                <!--Default content for showcaseCountdownValue2-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{ minutes }}</span>
                </div>
              </slot>
            </span>
            <span class="showcase-countdown-label">
              <slot name="minutesStringLabel">
                <!--Default content for showcaseCountdownLabel2-->
                <div class="navigation-fragment">
                  <span class="navigation-text">{{ minutes_string }}</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="showcase-countdown-item">
          </div>
        </div>
        <button
          id="navigationToggle"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          class="navigation-toggle"
        >
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 5h16M4 12h16M4 19h16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              class="navigation-brand-icon"
            >
              <path
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="navigation-mobile-menu">
        <li class="navigation-mobile-menu-item">
          <a href="#">
            <div class="navigation-mobile-link"><span>Potwierdzenie</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#church">
            <div class="navigation-mobile-link"><span>Kościół</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#wedding-hall">
            <div class="navigation-mobile-link"><span>Sala</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="#timeline">
            <div class="navigation-mobile-link"><span>Plan</span></div>
          </a>
        </li>
        <li class="navigation-mobile-menu-item">
          <a href="photos">
            <div class="navigation-mobile-link"><span>Zdjęcia</span></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation-display-none">
      <div class="navigation-contents">
        <DangerousHTML
          html="<style>
          @keyframes slideInLeft {to {opacity: 1;
  transform: translateX(0);}}
          </style> "
        ></DangerousHTML>
      </div>
    </div>
    <div class="navigation-display-none">
      <div class="navigation-contents">
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
  props: {
    target: {
      type: String,
      required: false,
      default: '2026-05-30T15:00:00'
    }
  },
  components: {
    DangerousHTML,
  },
  data() {
    return {
      now: Date.now(),
      timer: null
    };
  },
  computed: {
    days() {
      const targetMs = new Date('2026-05-30T16:00:00').getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const days_num = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      return days_num;
    },
    days_string() {
      const targetMs = new Date('2026-05-30T16:00:00').getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const days_num = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      if (days_num == 1) {
        return 'DZIEŃ';
      } else {
        return 'DNI';
      }
    },
    hours(){
      const targetMs = new Date('2026-05-30T16:00:00').getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      return all_hours - days*24;
    },
    hours_string(){
      const targetMs = new Date('2026-05-30T16:00:00').getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours_num = all_hours - days*24;
      if (hours_num == 1) {
        return 'GODZINA';
      } else if ([2,3,4,22,23].includes(hours_num) ) {
        return 'GODZINY';
      } else {
        return 'GODZIN';
      }
    },
    minutes(){
      const targetMs = new Date(this.target).getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_minutes = Math.floor(diffMs / (1000 * 60));
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      return all_minutes - all_hours*60;
    },
    minutes_string(){
      const targetMs = new Date(this.target).getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_minutes = Math.floor(diffMs / (1000 * 60));
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes_num = all_minutes - all_hours*60;
      if (minutes_num == 1) {
        return 'MINUTA';
      } else if ([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54].includes(minutes_num) ) {
        return 'MINUTY';
      } else {
        return 'MINUT';
      }
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = Date.now();
    }, 60 * 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.navigation-contents {
  display: contents;
}
 
.navigation-display-none {
  display: none;
}
 
.navigation-fragment {
  display: contents;
}
 
.navigation-text {
  display: inline-block;
}
@media (max-width: 600px) {
  .section-title {
    font-size: 1.5rem !important;
    display: none !important;
  }
  /* Make countdown numbers smaller on mobile */
  .showcase-countdown-value {
    font-size: 0.8rem !important;
    line-height: 1.2 !important;
  }
  .showcase-countdown-label {
    font-size: 0.4rem !important;
  }
  .navbar,
  .nav-container,
  .nav-links {
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }
  .nav-links a {
    font-size: 1.1rem !important;
    padding: 0.75rem 0 !important;
    margin: 0.2rem 0 !important;
    display: block !important;
    text-align: center !important;
  }
  .logo {
    font-size: 2rem !important;
    margin-bottom: 1rem !important;
  }
}
</style>
