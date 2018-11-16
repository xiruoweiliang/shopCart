<template>
  <div id="app">
    <router-view/>
    <!-- <a href="static/epub/Physics/2015_Book_ProceedingsOfTheInternationalC.epub">11</a> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  font-size: 0.48rem;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
