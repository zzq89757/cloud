<template>
  <div class="nav-item">
    <slot name="word">
      <router-link
        exact
        :to="{ path: '/' + en }"
        class="title"
        >{{ch}}
      </router-link>
    </slot>
  </div>
</template>

<script>
export default {
  props:{
    en:{
      type:String,
      require:true,
      default:"home"
    },
    ch:{
      type:String,
      require:true,
      default:"首页"
    }
  }
};
</script>
<style lang='css' scoped>
.nav-item{
  display: inline-block;  
}
</style>