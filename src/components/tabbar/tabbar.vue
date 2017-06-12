<template>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="计划">
        计划TODO-List
      </mt-tab-item>
      <mt-tab-item id="我的">
        我们的List
      </mt-tab-item>
    </mt-tabbar>


</template>

<script>

  export default {
    data () {
      return {
        selected:1
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
