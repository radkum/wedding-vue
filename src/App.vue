<script>
import Logo from './components/Logo.vue'
import Navbar from './components/Navbar.vue'
import Church from './components/Church.vue'
import WeddingHall from './components/WeddingHall.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Navbar,
    Church,
    WeddingHall
  }
}
</script>

<template>
  <div id="app">
    <Logo />
    <Navbar />
    <Church />
    <WeddingHall />
    <footer>
      <p>&copy; 2025 My Vue Site</p>
    </footer>
  </div>
</template>

<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
}

footer {
  background-color: #2c3e50;
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
