<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
mounted() {
  console.log(storage.getItem('user','age'))
},
}

</script>

<style>

</style>
