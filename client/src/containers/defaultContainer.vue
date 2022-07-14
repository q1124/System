<template>
  <div class="index">
    <HeadNav/>
    <navBar/>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from '../components/headerNav.vue'
import navBar from '../components/navBar.vue'

export default {
  name: 'index',
  components: {
    HeadNav,
    navBar
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
.index {
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
