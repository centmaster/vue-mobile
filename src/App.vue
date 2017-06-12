<template>
  <div id="app">
      <Top-nav></Top-nav>
      <router-view></router-view>
      <Tab-bar></Tab-bar>
  </div>
</template>

<script>
  import TopNav from './components/top-nav/top-nav';
  import TabBar from './components/tabbar/tabbar.vue'
export default {
  name: 'app',
  data(){
      return{

      }
  },

  method:{

  },

  computed:{

  },


  components:{
    TopNav,
    TabBar
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
