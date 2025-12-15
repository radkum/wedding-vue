<template>
  <div class="footer-container">
    <footer class="footer-main">
      <div class="footer-header">
        <span class="footer-header-text">Kontakt</span>
      </div>
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-divider"></div>
          <div class="footer-info-section">
            <footer-column person_name="Klaudia" 
              mail="klaudiacison6@gmail.com" 
              tel="536553549" />
            <footer-column person_name="Radek" 
              mail="radoslaw.kumorekit@gmail.com" 
              tel="796365270" />
          </div>
          <!-- <copyright /> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FooterColumn from '../components/footer-column'
import Copyright from '../components/copyright'

export default {
  name: 'Footer',
  props: {},
  components: {
    FooterColumn,
    Copyright
  },
}
</script>

<style scoped>
.footer-container {
  display: contents;
}
 
.footer-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
 
.footer-header-text {
  display: inline-block;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
</style>
