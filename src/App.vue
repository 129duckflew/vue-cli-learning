<template>
  <div id="app">
    <router-link class="btn btn-info" :to="{name:'Index'}">主页</router-link>
    <router-link class="btn btn-info" :to="{name:'HelloWorld'}">HelloWorld页面</router-link>
    <router-link class="btn btn-info":to="{name:'Books'}">书籍列表</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
