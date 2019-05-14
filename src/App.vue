<template>
  <div>
    <mt-header title="固定在顶部"></mt-header>
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="../static/img/vip.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../static/img/shopcart.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="查找">
        <img slot="icon" src="../static/img/find.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<style>
</style>
