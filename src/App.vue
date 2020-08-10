<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'app',
  data(){
    return {
      res:{}
    }
  },
  mounted() {
    //本地加载静态json的形式
    // this.axios.get('/mock/user/login.json').then(response=>{
    //   this.res=response
    // })
    this.axios.get('/user/login').then(response=>{
      this.res=response
    })

  },
}

</script>

<style>

</style>
