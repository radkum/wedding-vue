<template>
  <div class="countdown-wrap">
    <div class="countdown-card" role="status" aria-live="polite">
      <div class="count-number">{{ days }}</div>
      <div class="count-label">dni</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    target: {
      type: String,
      required: false,
      default: '2026-05-30T15:00:00'
    }
  },
  data() {
    return {
      now: Date.now(),
      timer: null
    };
  },
  computed: {
    days() {
      const targetMs = new Date(this.target).getTime();
      const diff = Math.max(0, targetMs - this.now);
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = Date.now();
    }, 60 * 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.countdown-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.countdown-card {
  min-width: 420px;
  padding: 4rem 4.8rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 16px 60px rgba(2,6,23,0.65);
  text-align: center;
}
.count-number {
  font-size: 8.5rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 1;
}
.count-label {
  margin-top: 0.6rem;
  font-size: 1.4rem;
  color: rgba(255,255,255,0.9);
}

@media (max-width: 1200px) {
  .count-number { font-size: 7rem; }
  .countdown-card { padding: 3.2rem 3.6rem; min-width: 360px; }
}

@media (max-width: 768px) {
  .count-number { font-size: 5.2rem; }
  .countdown-card { padding: 2.6rem 2.8rem; min-width: 300px; }
}

@media (max-width: 420px) {
  .count-number { font-size: 3.8rem; }
  .countdown-card { padding: 1.6rem 1.8rem; min-width: 220px; }
}
</style>
