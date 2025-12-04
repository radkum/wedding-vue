<template>
  <div class="home-container1">
    <app-navigation></app-navigation>
    <div class="hero-section">
      <div class="hero-background">
        <img
          src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
          alt="Newlywed couple walking hand in hand through a golden field on their wedding day"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-names">
          <h1 class="home-hero-title hero-title">Sophia &amp; James</h1>
          <div class="hero-heart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
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
          </div>
        </div>
        <div class="hero-date">
          <span class="hero-date-text">June 15, 2025</span>
        </div>
        <p class="hero-message section-content">
          Join us as we celebrate our love story and begin our forever journey
          together in the presence of family and friends
          <span v-html="rawawey"></span>
        </p>
        <div class="hero-nav">
          <a href="#venue">
            <div class="hero-nav-link"><span>Venue</span></div>
          </a>
          <a href="#rsvp">
            <div class="hero-nav-link"><span>RSVP</span></div>
          </a>
          <a href="#gallery">
            <div class="hero-nav-link"><span>Gallery</span></div>
          </a>
          <a href="#registry">
            <div class="hero-nav-link"><span>Registry</span></div>
          </a>
          <a href="#timeline">
            <div class="hero-nav-link"><span>Timeline</span></div>
          </a>
        </div>
      </div>
    </div>
    <div class="features-section">
      <div class="features-grid">
        <a href="#venue" id="venue">
          <div class="features-card">
            <div class="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
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
                    d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <circle cx="10" cy="10" r="3"></circle>
                </g>
              </svg>
            </div>
            <h2 class="features-title section-title">Venue &amp; Details</h2>
            <p class="features-description section-content">
              Discover where our celebration will take place and all the important
              information you need
              <span v-html="raw6syf"></span>
            </p>
          </div>
        </a>
        <a href="#rsvp" id="rsvp">
          <div class="features-card">
            <div class="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M8 2v4m8-4v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </g>
              </svg>
            </div>
            <h2 class="features-title section-title">RSVP</h2>
            <p class="features-description section-content">
              Let us know if you can join us on our special day and help us plan
              the perfect celebration
              <span v-html="rawq8bl"></span>
            </p>
          </div>
        </a>
        <a href="#gallery" id="gallery">
          <div class="features-card">
            <div class="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
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
                    d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
                  ></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </g>
              </svg>
            </div>
            <h2 class="features-title section-title">Gallery</h2>
            <p class="features-description section-content">
              Browse through our engagement photos and relive the moments that
              brought us here
              <span v-html="rawfd45"></span>
            </p>
          </div>
        </a>
        <a href="#registry" id="registry">
          <div class="features-card">
            <div class="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <rect width="18" height="4" x="3" y="8" rx="1"></rect>
                  <path
                    d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"
                  ></path>
                </g>
              </svg>
            </div>
            <h2 class="features-title section-title">Registry &amp; Gifts</h2>
            <p class="features-description section-content">
              Your presence is our gift, but if you wish to celebrate with us,
              explore our registry
              <span v-html="rawf9kn"></span>
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="about-section">
      <div class="about-container">
        <h2 class="about-main-title section-title">Our Love Story</h2>
        <div class="about-carousel">
          <button
            aria-label="Previous story"
            class="about-carousel-btn about-carousel-prev"
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
                d="m15 18l-6-6l6-6"
              ></path>
            </svg>
          </button>
          <div class="about-carousel-track">
            <div class="about-carousel-item about-carousel-active">
              <div class="about-content-block">
                <img
                  src="https://images.pexels.com/photos/4765081/pexels-photo-4765081.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A couple getting engaged by the sea, capturing a romantic moment at sunset"
                  class="about-image"
                />
                <div class="about-text">
                  <h3 class="about-subtitle">How We Met</h3>
                  <p class="about-description section-content">
                    It was a rainy autumn evening at a cozy bookstore cafe when
                    our eyes first met. James was lost in the classics section
                    while Sophia was searching for poetry. A shared love for
                    literature sparked a conversation that lasted hours, and
                    we&apos;ve been inseparable ever since.
                    <span v-html="rawx0b1"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="about-carousel-item">
              <div class="about-content-block">
                <img
                  src="https://images.pexels.com/photos/11643620/pexels-photo-11643620.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A man proposing to a woman on a sandy beach during sunset, capturing a romantic moment"
                  class="about-image"
                />
                <div class="about-text">
                  <h3 class="about-subtitle">The Proposal</h3>
                  <p class="about-description section-content">
                    Five years later, James recreated our first date at the same
                    bookstore, leading Sophia on a treasure hunt through pages of
                    our favorite books. The final clue led to the beach where he
                    got down on one knee as the sun set over the ocean, asking her
                    to write the next chapter of our story together.
                    <span v-html="raw58n2"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="about-carousel-item">
              <div class="about-content-block">
                <img
                  src="https://images.pexels.com/photos/1691922/pexels-photo-1691922.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A loving couple celebrates their wedding by the sea during a beautiful sunset"
                  class="about-image"
                />
                <div class="about-text">
                  <h3 class="about-subtitle">Our Journey</h3>
                  <p class="about-description section-content">
                    Together we&apos;ve traveled the world, built careers we love,
                    adopted two rescue dogs, and created a home filled with
                    laughter and warmth. Now we&apos;re ready to make our
                    commitment official and celebrate with the incredible people
                    who&apos;ve supported us along the way. Thank you for being
                    part of our story.
                    <span v-html="rawqwjt"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="Next story"
            class="about-carousel-btn about-carousel-next"
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
                d="m9 18l6-6l-6-6"
              ></path>
            </svg>
          </button>
        </div>
        <div class="about-carousel-dots">
          <button
            aria-label="Go to slide 1"
            class="about-carousel-dot about-carousel-dot-active"
          ></button>
          <button aria-label="Go to slide 2" class="about-carousel-dot"></button>
          <button aria-label="Go to slide 3" class="about-carousel-dot"></button>
        </div>
      </div>
    </div>
    <div id="timeline" class="showcase-section">
      <div class="showcase-background"></div>
      <div class="showcase-spotlight">
        <div class="showcase-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M12 6v6l4 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </g>
          </svg>
        </div>
        <h2 class="showcase-title section-title">Counting Down to Forever</h2>
        <div class="showcase-countdown">
          <div class="showcase-countdown-item">
            <span id="countdown-days" class="showcase-countdown-value">120</span>
            <span class="showcase-countdown-label">Days</span>
          </div>
          <div class="showcase-countdown-item">
            <span id="countdown-hours" class="showcase-countdown-value">14</span>
            <span class="showcase-countdown-label">Hours</span>
          </div>
          <div class="showcase-countdown-item">
            <span id="countdown-minutes" class="showcase-countdown-value">
              32
            </span>
            <span class="showcase-countdown-label">Minutes</span>
          </div>
          <div class="showcase-countdown-item">
            <span id="countdown-seconds" class="showcase-countdown-value">
              45
            </span>
            <span class="showcase-countdown-label">Seconds</span>
          </div>
        </div>
        <p class="showcase-message section-content">
          The moment we&apos;ve been waiting for is almost here. Make sure to RSVP
          so we can celebrate together.
          <span v-html="rawcc10"></span>
        </p>
        <button class="showcase-cta btn btn-primary btn-lg">
          Confirm Your Attendance
          <span v-html="rawjdvb"></span>
        </button>
      </div>
    </div>
    <div class="gallery-section">
      <h2 class="gallery-title section-title">Moments Before Forever</h2>
      <div class="gallery-carousel-wrapper">
        <button
          aria-label="Previous images"
          class="gallery-carousel-btn gallery-carousel-prev"
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
              d="m15 18l-6-6l6-6"
            ></path>
          </svg>
        </button>
        <div class="gallery-carousel">
          <div class="gallery-carousel-track">
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/32852107/pexels-photo-32852107.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A couple runs joyfully on a beach at sunset with a scenic view of Rio de Janeiro"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/1024972/pexels-photo-1024972.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Silhouette of a couple kissing on a tropical beach at sunset, showcasing romance and tranquility"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/4689716/pexels-photo-4689716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Back view of anonymous bride and groom holding hands while standing in woods near trees against bright sun beams in nature"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/30893425/pexels-photo-30893425.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A couple in wedding attire toasts to their new life on a scenic mountain deck"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/3785644/pexels-photo-3785644.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Bride and groom share a joyful embrace outdoors during a warm sunset, capturing a romantic wedding moment"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A bride and groom embrace amidst a sea of clouds at sunset in Đà Lạt, creating a romantic scene"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/3998368/pexels-photo-3998368.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Silhouette of a couple kissing on a dune during a romantic sunset, ideal for wedding themes"
                  class="gallery-image"
                />
              </div>
            </div>
            <div class="gallery-carousel-item">
              <div class="gallery-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/2983448/pexels-photo-2983448.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A romantic outdoor wedding couple sharing an intimate moment at sunset"
                  class="gallery-image"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          aria-label="Next images"
          class="gallery-carousel-btn gallery-carousel-next"
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
              d="m9 18l6-6l-6-6"
            ></path>
          </svg>
        </button>
      </div>
      <button class="gallery-cta btn btn-lg btn-secondary">
        View Full Gallery
        <span v-html="rawd2fw"></span>
      </button>
    </div>
    <div class="testimonials-section">
      <h2 class="testimonials-title section-title">Words From Loved Ones</h2>
      <div class="testimonials-carousel-wrapper">
        <button
          aria-label="Previous testimonial"
          class="testimonials-carousel-btn testimonials-carousel-prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 18l-6-6l6-6"
            ></path>
          </svg>
        </button>
        <div class="testimonials-carousel">
          <div class="testimonials-carousel-track">
            <div class="testimonials-carousel-item testimonials-carousel-active">
              <div class="testimonials-card">
                <div class="testimonials-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p class="testimonials-text section-content">
                  From the moment Sophia introduced us to James, we knew he was
                  the one. They complement each other perfectly, and their love is
                  genuine and inspiring. We couldn&apos;t be happier to welcome
                  James into our family.
                  <span v-html="rawaphq"></span>
                </p>
                <div class="testimonials-author">
                  <span class="testimonials-author-name">
                    Margaret &amp; Robert Chen
                    <span v-html="rawg4ds"></span>
                  </span>
                  <span class="testimonials-author-role">
                    Parents of the Bride
                  </span>
                </div>
              </div>
            </div>
            <div class="testimonials-carousel-item">
              <div class="testimonials-card">
                <div class="testimonials-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p class="testimonials-text section-content">
                  I&apos;ve watched James grow from a little boy to an incredible
                  man, and seeing him with Sophia is witnessing true love in
                  action. She brings out the best in him, and together
                  they&apos;re unstoppable. This is a match made in heaven.
                  <span v-html="rawmofm"></span>
                </p>
                <div class="testimonials-author">
                  <span class="testimonials-author-name">
                    Elizabeth &amp; Thomas Anderson
                    <span v-html="rawia36"></span>
                  </span>
                  <span class="testimonials-author-role">
                    Parents of the Groom
                  </span>
                </div>
              </div>
            </div>
            <div class="testimonials-carousel-item">
              <div class="testimonials-card">
                <div class="testimonials-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p class="testimonials-text section-content">
                  As Sophia&apos;s best friend since college, I&apos;ve had a
                  front-row seat to this beautiful love story. James treats her
                  like the queen she is, and their laughter fills every room.
                  I&apos;m so honored to stand beside them on their special day.
                  <span v-html="rawmdo4"></span>
                </p>
                <div class="testimonials-author">
                  <span class="testimonials-author-name">Emily Rodriguez</span>
                  <span class="testimonials-author-role">Maid of Honor</span>
                </div>
              </div>
            </div>
            <div class="testimonials-carousel-item">
              <div class="testimonials-card">
                <div class="testimonials-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                </div>
                <p class="testimonials-text section-content">
                  James is my brother and best friend. When he met Sophia,
                  everything changed for the better. She&apos;s kind, brilliant,
                  and makes him happier than I&apos;ve ever seen him. Can&apos;t
                  wait to officially call her my sister.
                  <span v-html="rawnaok"></span>
                </p>
                <div class="testimonials-author">
                  <span class="testimonials-author-name">Michael Anderson</span>
                  <span class="testimonials-author-role">Best Man</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          aria-label="Next testimonial"
          class="testimonials-carousel-btn testimonials-carousel-next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18l6-6l-6-6"
            ></path>
          </svg>
        </button>
      </div>
      <div class="testimonials-carousel-dots">
        <button
          aria-label="Go to testimonial 1"
          class="testimonials-carousel-dot testimonials-carousel-dot-active"
        ></button>
        <button
          aria-label="Go to testimonial 2"
          class="testimonials-carousel-dot"
        ></button>
        <button
          aria-label="Go to testimonial 3"
          class="testimonials-carousel-dot"
        ></button>
        <button
          aria-label="Go to testimonial 4"
          class="testimonials-carousel-dot"
        ></button>
      </div>
    </div>
    <div class="home-container2">
      <div class="home-container3">
        <DangerousHTML
          html="<style>
          @keyframes heartbeat {0%,100% {transform: scale(1);}
  50% {transform: scale(1.1);}}@keyframes pulse {0%,100% {opacity: 0.3;
  transform: scale(1);}
  50% {opacity: 0.6;
  transform: scale(1.1);}}@keyframes gentle-bounce {0%,100% {transform: translateY(0);}
  50% {transform: translateY(-4px);}}
          </style> "
        ></DangerousHTML>
      </div>
    </div>
    <div class="home-container4">
      <div class="home-container5">
        <DangerousHTML
          html="<script defer data-name='wedding-homepage'>
  (function(){
    const aboutCarousel = {
      currentIndex: 0,
      items: document.querySelectorAll('.about-carousel-item'),
      dots: document.querySelectorAll('.about-carousel-dot'),
  
      init() {
        document
          .querySelector('.about-carousel-prev')
          .addEventListener('click', () => this.prev())
        document
          .querySelector('.about-carousel-next')
          .addEventListener('click', () => this.next())
        this.dots.forEach((dot, index) => {
          dot.addEventListener('click', () => this.goTo(index))
        })
      },
  
      updateCarousel() {
        this.items.forEach((item, index) => {
          item.classList.toggle(
            'about-carousel-active',
            index === this.currentIndex
          )
        })
        this.dots.forEach((dot, index) => {
          dot.classList.toggle(
            'about-carousel-dot-active',
            index === this.currentIndex
          )
        })
      },
  
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length
        this.updateCarousel()
      },
  
      prev() {
        this.currentIndex =
          (this.currentIndex - 1 + this.items.length) % this.items.length
        this.updateCarousel()
      },
  
      goTo(index) {
        this.currentIndex = index
        this.updateCarousel()
      },
    }
  
    const countdown = {
      weddingDate: new Date('2025-06-15T15:00:00').getTime(),
  
      init() {
        this.update()
        setInterval(() => this.update(), 1000)
      },
  
      update() {
        const now = new Date().getTime()
        const distance = this.weddingDate - now
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
        document.getElementById('countdown-days').textContent = days
        document.getElementById('countdown-hours').textContent = hours
        document.getElementById('countdown-minutes').textContent = minutes
        document.getElementById('countdown-seconds').textContent = seconds
  
        if (distance < 0) {
          document.getElementById('countdown-days').textContent = '0'
          document.getElementById('countdown-hours').textContent = '0'
          document.getElementById('countdown-minutes').textContent = '0'
          document.getElementById('countdown-seconds').textContent = '0'
        }
      },
    }
  
    const galleryCarousel = {
      currentIndex: 0,
      itemsPerView: 3,
      track: document.querySelector('.gallery-carousel-track'),
      items: document.querySelectorAll('.gallery-carousel-item'),
  
      init() {
        this.updateItemsPerView()
        window.addEventListener('resize', () => this.updateItemsPerView())
        document
          .querySelector('.gallery-carousel-prev')
          .addEventListener('click', () => this.prev())
        document
          .querySelector('.gallery-carousel-next')
          .addEventListener('click', () => this.next())
      },
  
      updateItemsPerView() {
        if (window.innerWidth <= 767) {
          this.itemsPerView = 1
        } else if (window.innerWidth <= 991) {
          this.itemsPerView = 2
        } else {
          this.itemsPerView = 3
        }
        this.updateCarousel()
      },
  
      updateCarousel() {
        const itemWidth = this.items[0].offsetWidth
        const gap = 32
        const offset = -(this.currentIndex * (itemWidth + gap))
        this.track.style.transform = `translateX(${offset}px)`
      },
  
      next() {
        const maxIndex = this.items.length - this.itemsPerView
        if (this.currentIndex < maxIndex) {
          this.currentIndex++
          this.updateCarousel()
        }
      },
  
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--
          this.updateCarousel()
        }
      },
    }
  
    const testimonialsCarousel = {
      currentIndex: 0,
      items: document.querySelectorAll('.testimonials-carousel-item'),
      dots: document.querySelectorAll('.testimonials-carousel-dot'),
  
      init() {
        document
          .querySelector('.testimonials-carousel-prev')
          .addEventListener('click', () => this.prev())
        document
          .querySelector('.testimonials-carousel-next')
          .addEventListener('click', () => this.next())
        this.dots.forEach((dot, index) => {
          dot.addEventListener('click', () => this.goTo(index))
        })
        this.autoplay()
      },
  
      updateCarousel() {
        this.items.forEach((item, index) => {
          item.classList.toggle(
            'testimonials-carousel-active',
            index === this.currentIndex
          )
        })
        this.dots.forEach((dot, index) => {
          dot.classList.toggle(
            'testimonials-carousel-dot-active',
            index === this.currentIndex
          )
        })
      },
  
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length
        this.updateCarousel()
      },
  
      prev() {
        this.currentIndex =
          (this.currentIndex - 1 + this.items.length) % this.items.length
        this.updateCarousel()
      },
  
      goTo(index) {
        this.currentIndex = index
        this.updateCarousel()
      },
  
      autoplay() {
        setInterval(() => this.next(), 6000)
      },
    }
  
    aboutCarousel.init()
    countdown.init()
    galleryCarousel.init()
    testimonialsCarousel.init()
  })()
  </script>"
        ></DangerousHTML>
      </div>
    </div>
    <app-footer></app-footer>
    <a href="https://play.teleporthq.io/signup">
      <div aria-label="Sign up to TeleportHQ" class="home-container6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="home-icon53"
        >
          <path
            d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
            fill="#B23ADE"
          ></path>
          <path
            d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
            fill="#FF5C5C"
          ></path>
          <path
            d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
            fill="#2874DE"
          ></path>
        </svg>
        <span class="home-text6">Built in TeleportHQ</span>
      </div>
    </a>
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
      rawawey: ' ',
      raw6syf: ' ',
      rawq8bl: ' ',
      rawfd45: ' ',
      rawf9kn: ' ',
      rawx0b1: ' ',
      raw58n2: ' ',
      rawqwjt: ' ',
      rawcc10: ' ',
      rawjdvb: ' ',
      rawd2fw: ' ',
      rawaphq: ' ',
      rawg4ds: ' ',
      rawmofm: ' ',
      rawia36: ' ',
      rawmdo4: ' ',
      rawnaok: ' ',
    }
  },
  metaInfo: {
    title: 'Vivid Neat Dove',
    meta: [
      {
        property: 'og:title',
        content: 'Vivid Neat Dove',
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
 
.home-icon53 {
  width: 24px;
  margin-right: 4px;
}
 
.home-text6 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
