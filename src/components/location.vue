<template>
  <div class="showcase-background" >
    <div class="hero-content">
      <h1 class="hero-title home-hero-title">{{ object_name }}</h1>
      <div class="location">
        <h2 class = "object-description"> {{ description }}</h2>
        <div class="map-embed">
          <iframe
              :src="link"
              title="Mapa"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {'object_name': String, 'description': String, 'link': String},
}
</script>

<style scoped>
.location {
  margin-top: 16px;
}

.object-description {
  font-style: italic;
  color: white;
}

/* Responsive 16:9 map wrapper to ensure height on mobile */
.map-embed {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border: 0;
  overflow: hidden;
  border-radius: 8px;
}

.map-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
