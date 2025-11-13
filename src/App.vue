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
      <div class="title"> Wesele Klaudii i Radka za: </div>
      <Countdown target="2026-05-30T15:00:00" />
      <div class="title"> Więcej informacji w styczniu </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower:wght@400;700&display=swap');

#app{
  font-family: "Indie Flower", cursive;
  color: #324c4e;
}


body {
  margin: 0;
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

.title {
  font-size: 3.5rem;
  font-weight: bold;
  color: rgb(172,134,99);
  letter-spacing: -2px;
  line-height: 1;
}
</style>
