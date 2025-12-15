<template>
  <div class="showcase-background">
    <div class="hero-content">
      <h1 class="hero-title home-hero-title">{{ object_name }}</h1>
      <div class="location" id="church_id">
        <h2 id="church"> {{ description }}</h2>
        <iframe
            :src="link"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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
</style>
