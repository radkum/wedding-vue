<template>
  <div class="footer-footer-column footer-column">
      <h3 class="footer-column-title">
      <span>{{ person_name }}</span>
      </h3>
      <div class="footer-container">
      <a
          :href="`mailto:${mail}`"
          class="footer-contact-item"
          aria-label="Wyślij email"
      >
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
          <span>{{ mail }}</span>
      </a>
          <a
          :href="`tel:+48${tel}`"
          class="footer-contact-item"
          aria-label="Zadzwoń"
      >
          <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
          >
              <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2a19.86 19.86 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.07.96.26 1.9.57 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.5 2.8.57A2 2 0 0 1 22 16.92"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              />
          </svg>
          <span>{{ tel }}</span>
      </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FooterColumn',
  props: {'person_name': String, 'mail': String, 'tel': String},
}
</script>

<style scoped>
.footer-footer-column {
  width: 268px;
}
 
.footer-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
 
.footer-contact-item {
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  line-height: 1.4;
}

.footer-contact-item svg {
  flex: 0 0 auto;
}

.footer-contact-item span {
  overflow-wrap: anywhere;
}

@media (max-width: 640px) {
  .footer-footer-column {
    width: 100%;
  }
}
</style>
