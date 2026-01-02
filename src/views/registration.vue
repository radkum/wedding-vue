<template>
  <div>
    <app-navigation />
    <div class="registration-container2">
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLScFc-JOKgR0mpuRRi3JmTqOCnt3HqDfvpWc8cDpxYNNimwIRw/viewform?embedded=true" 
        width="640" 
        height="1200"
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        Ładuję…
      </iframe>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'Registration',
  props: {},
  components: {
    AppNavigation,
    AppFooter,
  },
  data() {
    return {
      checkInterval: null,
    };
  },
  methods: {
    scanIframeContent() {
      const iframe = this.$refs.iframeElement;
      if (!iframe) return;

      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc) {
          console.log('Cannot access iframe document (cross-origin)');
          return;
        }

        // Iterate through all elements and log their text
        const allElements = iframeDoc.querySelectorAll('*');
        console.log(`Found ${allElements.length} elements in iframe`);
        
        allElements.forEach((element, index) => {
          const text = element.innerText || element.textContent;
          if (text && text.trim()) {
            console.log(`[${index}] ${element.tagName}: ${text.substring(0, 100)}`);
          }
        });

        // Check for thank you message specifically
        const bodyText = iframeDoc.body.innerText || '';
        if (bodyText.includes('Thank you')) {
          console.log('✓ Found "Thank you" message!');
          iframe.style.height = '300px';
        }
      } catch (e) {
        console.error('Error accessing iframe:', e.message);
      }
    }
  },
  mounted() {
    // Check every 2 seconds
    this.checkInterval = setInterval(this.scanIframeContent, 2000);
    // Also check on load
    this.$refs.iframeElement?.addEventListener('load', this.scanIframeContent);
  },
  beforeDestroy() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  },
  metaInfo: {
    title: 'Potwierdzenie obecności',
    meta: [
      {
        property: 'og:title',
        content: 'registration',
      },
    ],
  },
}
</script>

<style scoped>
.registration-container1 {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  flex-direction: column;
}
 
.registration-form {
  gap: 8px;
  width: 100%;
  max-width: 320px;
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
 
.registration-textinput1 {
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}
 
.registration-container2 {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.registration-container2 iframe {
  width: 100%;
  max-width: 640px;
  border: none;
}
 
.registration-textinput2 {
  width: 100%;
}
 
.registration-container3 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
 
.registration-textinput3 {
  width: 100%;
}
 
.registration-button {
  width: 100%;
}
 
.registration-link {
  display: contents;
}
 
.registration-container4 {
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
 
.registration-icon1 {
  width: 24px;
  margin-right: 4px;
}
 
.registration-text3 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
