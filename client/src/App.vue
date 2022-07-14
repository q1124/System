<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  name: 'app',

  // 建立時確認
  created () {
    if (localStorage.token) {
      const decoded = jwtDecode(localStorage.token)
      // token vues
      this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
      this.$store.dispatch('setUser', decoded)
    }
  },
  methods: {
    // 判斷是否為空
    isEmpty (value) {
      return value === undefined || value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    }
  }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
}
</style>
