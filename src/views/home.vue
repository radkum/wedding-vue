<template>
  <div class="home-container1">
    <app-navigation>
    </app-navigation>
    <div class="hero-section">
      <div class="hero-background">
        <img
          alt="Newlywed couple walking hand in hand through a golden field on their wedding day"
          src="/background3.jpg"
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
          </span>
        </p>
      </div>
    </div>
    <div class="locations-row">
      <div id="church" class="scrollable">
        <section class="showcase-section">
        <Location object_name="Kościół" description="Msza odbędzie się w kościele Najświętszego serca Pana Jezusa w Mokrzyskach o godzinie 15:00" 
        link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34515.63806859726!2d20.586372649103378!3d49.98529443948824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471628bc2f78659d%3A0xdf106acd59c3faf3!2sKo%C5%9Bci%C3%B3%C5%82%20Naj%C5%9Bwi%C4%99tszego%20Serca%20Pana%20Jezusa%20w%20Mokrzyskach!5e0!3m2!1spl!2spl!4v1760345034512!5m2!1spl!2spl" />
        </section>
      </div>
      <div id="wedding_hall" class="scrollable">
        <section class="showcase-section">
        <Location object_name="Sala weselna" description="Sala weselna znajduje się w Borku. Znajdują się tam dwie sale. Wesele odbędzie się w sali 'Stodoła'" 
        link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81985.89909041725!2d20.334160944332883!3d50.047719556816325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47162f8f4c12a0b9%3A0x64ae37262f06366!2sRestauracja%20STODO%C5%81A%20Borek!5e0!3m2!1spl!2spl!4v1760344964669!5m2!1spl!2spl" />
        </section>
      </div>
    </div>
    <div id="timeline-section" class="home-timeline timeline-section scrollable">
      <div class="hero-background"><div class="hero-overlay"></div></div>
      <div class="hero-content">
        <div class="hero-names">
          <section  class="wedding-timeline timeline ">
          <h2>Plan dnia wesela</h2>
          <ul>
            <li><strong>15:00</strong> – Rozpoczęcie ceremonii w kościele</li>
            <li><strong>16:00</strong> – Wspólne zdjęcie przed kościołem</li>
            <li><strong>16:30</strong> – Powitanie Państwa Młodych w sali</li>
            <li><strong>17:00</strong> – Obiad</li>
            <li><strong>18:00</strong> – Życzenia i wspólne zdjęcia </li>
            <li><strong>19:00</strong> – Pierwszy taniec</li>
            <li><strong>20:00</strong> – I Kolacja</li>
            <li><strong>22:00</strong> – II Kolacja</li>
            <li><strong>23:30</strong> – Zabawy </li>
            <li><strong>00:00</strong> – Otrzepiny </li>
            <li><strong>01:00</strong> – III Kolacja</li>
            <li><strong>03:00</strong> – Impreza na całego</li>
            <li><strong>05:00</strong> – Pożegnanie</li>
          </ul>
        </section>
          <div class="home-hero-heart2 hero-heart"></div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'
import Location from '../components/location'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavigation,
    DangerousHTML,
    AppFooter,
    Location,
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
    ],
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;600&display=swap');
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

/* Ensure the whole timeline section has a white background */
#timeline-section {
  background: #ffffff;
  border-radius: 16px;
  padding: 0rem;
}

/* Remove overlay/image so white background is visible */
#timeline-section .hero-background,
#timeline-section .hero-background .hero-overlay,
#timeline-section .hero-background .hero-image {
  display: none;
}

/* Wedding invitation style for timeline */
#timeline-section h2 {
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: clamp(2rem, 6vw, 3rem);
  color: #2b3a3b;
  text-align: center;
  margin: 0 0 0.75rem;
}

/* Locations row: show church and hall side-by-side on wide screens */
.locations-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.locations-row .showcase-section {
  background: #ffffff;
  border-radius: 12px;
  padding: 12px;
}

@media (max-width: 800px) {
  .locations-row {
    grid-template-columns: 1fr;
  }
}

#timeline-section ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 860px;
  background: #ffffff; /* white backdrop for the list area */
}

#timeline-section li {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1rem, 2.6vw, 1.2rem);
  color: #1a1a1a;
  line-height: 1.5;
  padding: 0.35rem 0;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  border-bottom: 1px dashed rgba(0,0,0,0.08);
}

#timeline-section li:last-child {
  border-bottom: none;
}

#timeline-section li strong {
  font-weight: 600;
  color: #0f2a2e;
  background: #f2fbfd; /* subtle but still white-ish chip */
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  min-width: 74px;
  text-align: center;
}
</style>
