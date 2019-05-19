<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in swiperImgS" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <order-content>
      <order-item v-for="item in iconImgs" :key="item.id">
        <router-link :to="item.route">
          <img :src="item.imgUrl" alt="" class="item-img">
          <p>{{item.desc}}</p>
        </router-link>
      </order-item>
    </order-content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 轮播图数据
      swiperImgS:['http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
        'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      ],
      // 图标栏
      iconImgs:[{
        "id": "0001",
        "imgUrl": "../../static/img/news.png",
        "desc": "新闻资讯",
        "route": {"name": 'NewsList'}
      }, {
        "id": "0002",
        "imgUrl": "../../static/img/picShare.png",
        "desc": "图文分享",
        "route": {"name": 'Home'}
      }, {
        "id": "0003",
        "imgUrl": "../../static/img/goodsShow.png",
        "desc": "商品展示",
        "route": {"name": 'Home'}
      }, {
        "id": "0004",
        "imgUrl": "../../static/img/feedback.png",
        "desc": "留言反馈",
        "route": {"name": 'Home'}
      }, {
        "id": "0005",
        "imgUrl": "../../static/img/search.png",
        "desc": "搜索咨询",
        "route": {"name": 'Home'}
      }, {
        "id": "0006",
        "imgUrl": "../../static/img/callme.png",
        "desc": "联系我们",
        "route": {"name": 'Home'}
      }]
    }
  },
  // 向服务器发送get请求，由于服务器没配置好，先注释
  // created() {
  //   this.$axios.get('getlunbo')
  //   .then(res => {
  //     this.imgs = res.data.message;
  //   })
  //   .catch(err => console.log(err))
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper /deep/ .mint-swipe-indicator {
  background: rgba(255, 255, 255, .8);
  opacity: 1;
}
.wrapper /deep/ .is-active {
  background: red;
  opacity: 1;
}
.mint-swipe {
  width: 100%;
  height: 31.25vw;
}
.mint-swipe img {
  width: 100%;
}
</style>
