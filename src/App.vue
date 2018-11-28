<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import url('./assets/base.css');
  @import url('./assets/style.css');
  @import url('./assets/css/swiper.min.css');
</style>
<script>
export default {
  created:function(){
    this.axios.get("http://127.0.0.1:8000/api/test").then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.data)
    })
  }
}
</script>
