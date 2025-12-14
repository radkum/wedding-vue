<template>
  <div class="footer-container1">
    <footer class="footer-main">
      <span>
        <slot name="text">
          <!--Default content for text-->
          <div class="footer-fragment">
            <span class="footer-text20">Kontakt</span>
          </div>
        </slot>
      </span>
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-divider"></div>
          <div class="footer-info-section">
            <div class="footer-column">
              <h3 class="footer-column-title">Klaudia</h3>
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
            <div class="footer-footer-column2 footer-column">
              <h3 class="footer-column-title">
                <span>Radek</span>
                <br />
                Get in Touch
              </h3>
              <div class="footer-container2">
                <a
                  href="mailto:hello@everafterpage.com?subject="
                  class="footer-link5"
                >
                  <div class="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <span>radoslaw.kumorekit@gmail.com</span>
                  </div>
                </a>
                <div class="footer-contact">
                  <p class="footer-contact-note">Numer Klaudii</p>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copyright">
              © 2025 EverAfterPage. All rights reserved.
              <span v-html="raw73i3"></span>
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
      raw73i3: ' ',
    }
  },
}
</script>

<style scoped>
.footer-container1 {
  display: contents;
}
 
.footer-footer-column2 {
  width: 268px;
}
 
.footer-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
 
.footer-link5 {
  display: contents;
}
 
.footer-fragment {
  display: contents;
}
 
.footer-text20 {
  display: inline-block;
  font-size: 24px;
  font-style: normal;
  text-align: justify;
  font-weight: 600;
}
</style>
