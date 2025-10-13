<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Hamburger Icon -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <!-- Navigation Links -->
      <ul :class="['nav-links', { open: isOpen }]">
        <li><a href="#">Home</a></li>
        <li><a href="#church_id">Kościół</a></li>
        <li><a href="#wedding_hall_id">Sala</a></li>
        <li><a href="#">Plan wydarzenia</a></li>
        <li><a href="#">Noclegi</a></li>
        <li><a href="#">Zdjęcia</a></li>
        <li><a href="#footer">Kontakt</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
/* General styles */
.navbar {
  background: rgba(24, 151, 115, 1);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 300px rgba(83, 58, 58, 0.1);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

/* Navigation links (desktop) */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #f8f9f9ce;
  text-decoration: none;
  font-weight: 500;
  font-size: 25px;
  transition: 0.2s;
  margin: 15px;
}

.nav-links a:hover {
  text-decoration: underline;
  color: #2b069bff;
}

/* Hamburger icon (hidden on desktop) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}
</style>
