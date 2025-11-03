<template>
  <div class="countdown-wrap">
    <div class="countdown-card" role="status" aria-live="polite">
      <div class="days-count">{{ days }} dni</div>
      <div class="hours-count">{{ hours }} godzin</div>
      <div class="minutes-count">{{ minutes }} minut </div>
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
      const diffMs = Math.max(0, targetMs - this.now);
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    },
    hours(){
      const targetMs = new Date(this.target).getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      return all_hours - days*24;
    },
    minutes(){
      const targetMs = new Date(this.target).getTime();
      const diffMs = Math.max(0, targetMs - this.now);
      const all_minutes = Math.floor(diffMs / (1000 * 60));
      const all_hours = Math.floor(diffMs / (1000 * 60 * 60));
      return all_minutes - all_hours*60;
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
};
</script>

<style scoped>
.countdown-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: 'Poppins';
}
.countdown-card {
  min-width: 360px;
  padding: 1.6rem 2.8rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 16px 60px rgba(2,6,23,0.5);
  text-align: center;
}
.days-count {
  font-size: 4.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 1;
}
.hours-count {
  font-size: 4rem;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 2;
}
.minutes-count {
  font-size: 3.5rem;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 1;
}

@media (max-width: 1200px) {
  .days-count { font-size: 4rem; }
  .hours-count { font-size: 3.5rem; }
  .minutes-count { font-size: 3rem; }
  .countdown-card { padding: 3.2rem 3.6rem; min-width: 360px; }
}

@media (max-width: 768px) {
  .days-count { font-size: 3.4rem; }
  .hours-count { font-size: 3.0rem; }
  .minutes-count { font-size: 2.6rem; }
  .countdown-card { padding: 2.6rem 2.8rem; min-width: 300px; }
}

@media (max-width: 420px) {
  .days-count { font-size: 3.2rem; }
  .hours-count { font-size: 2.4rem; }
  .minutes-count { font-size: 1.6rem; }
  .countdown-card { padding: 1.6rem 1.8rem; min-width: 220px; }
}
</style>
