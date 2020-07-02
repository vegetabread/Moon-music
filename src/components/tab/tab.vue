<template>
    <div class="neavy">
        <router-link class="tag" to="/recommend" tag="div">
            <span class="tab-btn">推荐</span>
        </router-link>
        <router-link class="tag" to="/singer" tag="div">
            <span class="tab-btn">歌手</span>
        </router-link>
        <router-link class="tag" to="/rank" tag="div">
            <span class="tab-btn">排名</span>
        </router-link>
        <router-link class="tag" to="/search" tag="div">
            <span class="tab-btn">搜索</span>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.neavy
  display flex
  line-height 44px
  height 44px
  font-size: $font-size-medium
  .tag
    flex:1
    text-align center
    .tab-btn
        color: $color-text-l
        padding-bottom: 5px
    .tab-btn:hover
        color: $color-theme
        border-bottom: 2px solid $color-theme
</style>