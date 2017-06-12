<template>
  <div class="nav">

    <button>{{ msg }}</button>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Message',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 button{
   width:150px;
   height: 40px;
   margin: 0 auto;
 }
</style>
