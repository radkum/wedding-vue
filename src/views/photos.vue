<template>
  <div class="photos-container">
    <app-navigation />
    <div class="photos-title"> 
      <h1>Zdjecia lub link do galerii znajdzie się tutaj po weselu :)</h1>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'Photos',
  props: {},
  components: {
    AppNavigation,
    AppFooter,
  },
  metaInfo: {
    title: 'Zdjęcia',
    meta: [
      {
        property: 'og:title',
        content: 'photos',
      },
    ],
  },
}
</script>

<style scoped>
  .photos-title {
  display: flex;
  margin-top: 120px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}

.photos-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  flex-direction: column;
}
 
.photos-link {
  display: contents;
}
 
.photos-container2 {
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
 
.photos-icon1 {
  width: 24px;
  margin-right: 4px;
}
 
.photos-text2 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
