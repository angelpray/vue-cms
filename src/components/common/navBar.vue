<template>
  <div class="tmpl">
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    // props属性在template中可以直接用，在JS中需要this.name
    name: 'nav-bar',
    props: ['title'],
    methods: {
      goback() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
.tmpl .mint-header {
  background: yellowgreen;
}
</style>
