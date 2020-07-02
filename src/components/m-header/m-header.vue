<template>
    <div class="header">
        <div class="icon"></div>
        <h1 class="text">Moon Music</h1>
        <router-link tag="div" to="/" class="mine">
        <i class="icon-mine"></i>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/mixin.styl'
.header
    position relative
    height 44px
    color $color-theme
    text-align center
    // background pink
    .icon
        display inline-block
        margin-top 6px
        bg-image('logo')
        width 30px
        height 32px
        margin-right 9px
        background-size 30px 32px
        vertical-align top
    .text
        display inline-block
        line-height 44px
        vertical-align top
        font-size $font-size-large
    .mine
        position absolute
        top 0
        right 0
        .icon-mine
            font-size 20px
            padding 12px
            display block
            color: $color-theme
</style>