<template>
  <div>
    <mt-header title="Vue-cms"></mt-header>
    <router-view />
    <mt-tabbar v-model="selected">
      <div @click="change('Home')" style="width: 25%">
        <mt-tab-item id="Home">
          <img slot="icon" src="../static/img/index.png">
          首页
        </mt-tab-item>
      </div>
      <div @click="change('Member')" style="width: 25%">
        <mt-tab-item id="Member">
          <img slot="icon" src="../static/img/vip.png">
          会员
        </mt-tab-item>
      </div>
      <div @click="change('Shopcart')" style="width: 25%">
        <mt-tab-item id="Shopcart">
          <img slot="icon" src="../static/img/shopcart.png">
          购物车
        </mt-tab-item>
      </div>
      <div @click="change('Search')" style="width: 25%">
        <mt-tab-item id="Search">
          <img slot="icon" src="../static/img/find.png">
          搜索
        </mt-tab-item>
      </div>
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
    },
    methods: {
      change(val) {
        this.$router.push({
          name: val,
        })
      }
    },
    watch: {
      // 不能使用箭头函数
      // selected: function(newV, oldV) {
      //   console.log(newV);
      //   console.log(oldV);
      //   this.$router.push({
      //     name: newV,
      //   })
      // }
    }
  }
</script>

<style scoped>
.mint-tabbar {
  position: fixed;
  bottom: 0;
}
</style>
