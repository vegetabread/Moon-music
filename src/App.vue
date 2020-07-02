<template>
  <div id="app">
    <home-header></home-header>
    <home-tag></home-tag>
    <keep-alive>
   <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import HomeHeader from './components/m-header/m-header'
import HomeTag from './components/tab/tab'
export default {
  components: {
    HomeHeader,
    HomeTag
  }
}
</script>
<style lang="stylus" scoped>
</style>
