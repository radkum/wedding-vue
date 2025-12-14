<template>
  <div class="component-container">
    <app-banner1>
      <template v-slot:action1>
        <div class="component-fragment1">
          <span class="component-text1">Call to Action</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="component-fragment2">
          <span class="component-text2">Company mission statement</span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="component-fragment3">
          <span class="component-text3">Company Name</span>
        </div>
      </template>
    </app-banner1>
  </div>
</template>

<script>
import AppBanner1 from './banner1'

export default {
  name: 'AppComponent',
  props: {},
  components: {
    AppBanner1,
  },
}
</script>

<style scoped>
.component-container {
  flex: 0 0 auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
  align-items: flex-start;
}
 
.component-fragment1 {
  display: contents;
}
 
.component-text1 {
  display: inline-block;
}
 
.component-fragment2 {
  display: contents;
}
 
.component-text2 {
  display: inline-block;
}
 
.component-fragment3 {
  display: contents;
}
 
.component-text3 {
  display: inline-block;
}
</style>
