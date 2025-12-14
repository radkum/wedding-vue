<template>
  <div class="home-container1">
    <app-navigation>
    </app-navigation>
    <div class="hero-section">
      <div class="hero-background">
        <img
          alt="Newlywed couple walking hand in hand through a golden field on their wedding day"
          src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-names">
          <h1 class="hero-title home-hero-title">Klaudia &amp; Radek</h1>
          <div class="hero-heart">
            <svg
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
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
          </div>
        </div>
        <div class="hero-date">
          <span class="hero-date-text">30 Maj, 2026</span>
        </div>
        <p class="hero-message section-content">
          <span>
            Dołącz do nas, świętując naszą historię miłosną i rozpoczynając naszą
            wspólną podróż 
          </span>
          <span>
            w obecności rodziny i przyjaciół
            <span v-html="rawin1c"></span>
          </span>
          <span v-html="rawfg5y"></span>
        </p>
      </div>
    </div>
    <div class="features-section">
      <div class="features-grid">
        <a href="#church" id="venue">
          <div class="features-card">
            <div class="features-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <circle r="3" cx="10" cy="10"></circle>
                </g>
              </svg>
            </div>
            <h2 class="section-title features-title">Szczegóły dojazdu</h2>
            <p class="section-content features-description">
              Tutaj znajdziesz lokalizacje kościoła oraz sali weselnej
            </p>
          </div>
        </a>
        <a href="registration" id="rsvp">
          <div class="features-card">
            <div class="features-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2v4m8-4v4"></path>
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </g>
              </svg>
            </div>
            <h2 class="section-title features-title">Potwierdzenie przybycia</h2>
            <p class="section-content features-description">
              Obecność można potwierdzić formularzem lub pod nr telefonu:
              796365270 lub 536553549
            </p>
          </div>
        </a>
        <a href="photos" id="gallery">
          <div class="features-card">
            <div class="features-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
                  ></path>
                  <circle r="3" cx="12" cy="13"></circle>
                </g>
              </svg>
            </div>
            <h2 class="section-title features-title">Zdjęcia</h2>
            <p class="section-content features-description">
              Tutaj pojawią się zdjęcia z naszego wesela
            </p>
          </div>
        </a>
        <a href="#timeline" id="registry">
          <div class="features-card">
            <div class="features-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="8" rx="1" width="18" height="4"></rect>
                  <path
                    d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"
                  ></path>
                </g>
              </svg>
            </div>
            <h2 class="section-title features-title">Plan</h2>
            <p class="section-content features-description">
              Wydarzenie składa się z dwóch elementów: ślubu i wesela
            </p>
          </div>
        </a>
      </div>
    </div>
    <div id="church" class="showcase-section">
      <div class="showcase-background">
        <div class="hero-content">
          <h1 class="hero-title home-hero-title">Lokalizacja kościoła</h1>
          <div class="location" id="church_id">
        <h2 id="church">Msza odbędzie się w kościele Najświętszego serca Pana Jezusa w Mokrzyskach o godzinie 16:00</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34515.63806859726!2d20.586372649103378!3d49.98529443948824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471628bc2f78659d%3A0xdf106acd59c3faf3!2sKo%C5%9Bci%C3%B3%C5%82%20Naj%C5%9Bwi%C4%99tszego%20Serca%20Pana%20Jezusa%20w%20Mokrzyskach!5e0!3m2!1spl!2spl!4v1760345034512!5m2!1spl!2spl"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
        </div>
      </div>
    </div>
    <div id="wedding_hall" class="showcase-section">
      <div class="showcase-background">
        <div class="hero-content">
          <h1 class="hero-title home-hero-title">Sala weselna</h1>
          <div class="location">
        <h2 id="wedding">Sala weselna znajduje się w borku</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81985.89909041725!2d20.334160944332883!3d50.047719556816325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47162f8f4c12a0b9%3A0x64ae37262f06366!2sRestauracja%20STODO%C5%81A%20Borek!5e0!3m2!1spl!2spl!4v1760344964669!5m2!1spl!2spl"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
        </div>
      </div>
    </div>
    <div id="timeline" class="home-timeline hero-section">
      <div class="hero-background"><div class="hero-overlay"></div></div>
      <div class="hero-content">
        <div class="hero-names">
          <h1 class="hero-title home-hero-title">Timeline</h1>
          <section id="timeline" class="wedding-timeline">
      <h2>Plan dnia wesela</h2>
      <ul>
        <li><strong>15:00</strong> – Rozpoczęcie ceremonii</li>
        <li><strong>16:00</strong> – Zdjęcia grupowe</li>
        <li><strong>16:30</strong> – Początek przyjęcia</li>
        <li><strong>17:00</strong> – Obiad</li>
        <li><strong>18:30</strong> – Toasty i przemówienia</li>
        <li><strong>19:00</strong> – Pierwszy taniec</li>
        <li><strong>19:15</strong> – Zabawa taneczna</li>
        <li><strong>20:30</strong> – Krojenie tortu</li>
        <li><strong>21:00</strong> – Dalsza zabawa</li>
        <li><strong>00:00</strong> – Pożegnanie</li>
      </ul>
    </section>
          <div class="home-hero-heart2 hero-heart"></div>
        </div>
      </div>
    </div>
    <app-footer>
      <template v-slot:text>
        <div class="home-fragment9"><span class="home-text25">Kontakt</span></div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavigation,
    DangerousHTML,
    AppFooter,
  },
  data() {
    return {
      rawin1c: ' ',
      rawfg5y: ' ',
    }
  },
  metaInfo: {
    title: 'Wesele Klaudii i Radka',
    meta: [
      {
        property: 'og:title',
        content: 'Wesele Klaudii i Radka',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://vivid-neat-dove-2yhlnu.teleporthq.app/',
      },
    ],
  },
}
</script>

<style scoped>
.home-container1 {
  width: 100%;
  display: block;
  min-height: 100vh;
}
 
.home-fragment1 {
  display: contents;
}
 
.home-text10 {
  display: inline-block;
}
 
.home-fragment2 {
  display: contents;
}
 
.home-text11 {
  display: inline-block;
}
 
.home-fragment3 {
  display: contents;
}
 
.home-text12 {
  display: inline-block;
}
 
.home-fragment4 {
  display: contents;
}
 
.home-text13 {
  display: inline-block;
}
 
.home-fragment5 {
  display: contents;
}
 
.home-text14 {
  display: inline-block;
}
 
.home-fragment6 {
  display: contents;
}
 
.home-text15 {
  display: inline-block;
}
 
.home-fragment7 {
  display: contents;
}
 
.home-text16 {
  display: inline-block;
}
 
.home-fragment8 {
  display: contents;
}
 
.home-text17 {
  display: inline-block;
}
 
.home-timeline {
  align-items: flex-start;
  justify-content: center;
}
 
.home-hero-heart2 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
}
 
.home-container2 {
  display: none;
}
 
.home-container3 {
  display: contents;
}
 
.home-container4 {
  display: none;
}
 
.home-container5 {
  display: contents;
}
 
.home-fragment9 {
  display: contents;
}
 
.home-text25 {
  display: inline-block;
  font-size: 24px;
  font-style: normal;
  text-align: justify;
  font-weight: 600;
}
 
.home-container6 {
  right: 50px;
  border: 1px solid #ffffff5c;
  bottom: 30px;
  display: flex;
  z-index: 22;
  position: fixed;
  box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
  min-height: auto;
  align-items: center;
  padding-top: 8px;
  padding-left: 12px;
  border-radius: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  backdrop-filter: blur(6px);
  background-color: rgba(41, 41, 41, 0.41);
}
 
.home-icon29 {
  width: 24px;
  margin-right: 4px;
}
 
.home-text26 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
