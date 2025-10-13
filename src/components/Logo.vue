<template>
  <div class="logo">
    <img :src="logoUrl" alt="Site Logo" />
  <h1 class="fancy-font"> Klaudia i Radek </h1>
    <img :src="logoUrl2" alt="Site Logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      logoUrl: '/logo_flower2.png',
      logoUrl2: '/logo_flower.png'
    };
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.fancy-font {
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
  color: #324c4ece;
  margin: 0 1rem;
}

.logo img {
  height: 300px;
  width: auto;
}
</style>
