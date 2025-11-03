<script>
import Countdown from './components/Countdown.vue'

export default {
  name: 'App',
  components: {
    Countdown
  }
}
</script>

<template>
  <div id="app">
      <Countdown target="2026-05-30T15:00:00" />
  </div>
</template>

<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
}

footer {
  background-color: #305a84ff;
  color: white;
  text-align: center;
  padding: 20px;
}

.map-container {
  padding: 2rem;
  text-align: center;
}

iframe {
  border: none;
  border-radius: 8px;
  max-width: 100%;
}
</style>
