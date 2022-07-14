<template>
  <div class="index">
    <div class="container">
      <h1 class="title">後臺管理平台</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index'
}
</script>

<style scoped>
.index {
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  background: url(../assets/image/home.jpg);
  background-size: 100% 100%;
  padding-top: 100px;
}
.title {
  font-size: 30px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
}
</style>
