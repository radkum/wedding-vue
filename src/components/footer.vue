<template>
  <div class="footer-container">
    <footer class="footer-main">
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-social-section">
            <div class="footer-brand">
              <div class="footer-logo">
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
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  ></path>
                </svg>
                <span class="footer-logo-text">EverAfterPage</span>
              </div>
              <p class="footer-tagline">Creating Beautiful Memories Together</p>
            </div>
            <div class="footer-social-primary">
              <h2 class="footer-social-title section-title">
                Follow Our Journey
              </h2>
              <p class="footer-social-description section-content">
                Join us on social media and share in the celebration of love
                <span v-html="raw01px"></span>
              </p>
              <div class="footer-social-links">
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    class="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                        ></path>
                      </g>
                    </svg>
                    <span>Instagram</span>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    class="footer-social-link"
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
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                    <span>Facebook</span>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Pinterest"
                    class="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          d="m8 20l4-9m-1.3 3c.437 1.263 1.43 2 2.55 2c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7"
                        ></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                      </g>
                    </svg>
                    <span>Pinterest</span>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Twitter"
                    class="footer-social-link"
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
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                    <span>Twitter</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-info-section">
            <div class="footer-column">
              <h3 class="footer-column-title">Quick Links</h3>
              <ul class="footer-links-list">
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Homepage</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Our Story</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Gallery</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>RSVP</span></div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-title">Event Details</h3>
              <ul class="footer-links-list">
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Ceremony</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Reception</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Accommodations</span></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="footer-link"><span>Registry</span></div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-title">Get in Touch</h3>
              <div class="footer-contact">
                <a href="mailto:hello@everafterpage.com?subject=">
                  <div class="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                    <span>hello@everafterpage.com</span>
                  </div>
                </a>
                <p class="footer-contact-note">
                  For any questions or special requests
                  <span v-html="rawm6mc"></span>
                </p>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copyright">
              © 2025 EverAfterPage. All rights reserved.
              <span v-html="rawo1uq"></span>
            </p>
            <div class="footer-bottom-links">
              <a href="#">
                <div class="footer-bottom-link"><span>Privacy Policy</span></div>
              </a>
              <span class="footer-bottom-separator">•</span>
              <a href="#">
                <div class="footer-bottom-link">
                  <span>Terms of Service</span>
                </div>
              </a>
            </div>
            <p class="footer-crafted">Made with love for your special day</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  data() {
    return {
      raw01px: ' ',
      rawm6mc: ' ',
      rawo1uq: ' ',
    }
  },
}
</script>

<style scoped>
.footer-container {
  display: contents;
}
</style>
