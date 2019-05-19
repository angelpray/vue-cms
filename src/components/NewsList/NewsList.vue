<template>
  <div class="tmpl">
    <nav-bar :title="title"/>
    <!-- 新闻列表 -->
    <router-link :to="{ name: 'NewsDetail', params: {id: news.id} }" v-for="(news, index) in newsList" :key="index">
      <div class="demo">
        <img class="news-img" :src="news.img_url" />
        <div class="news-desc">
          <h3>{{news.title}}</h3>
          <div>
            <span class="newsMeta clickCount">点击数: {{news.click_count}}</span>
            <span class="newsMeta publishTime">发表时间: {{news.add_time | convertTime('YYYY-MM-DD')}}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      title: '新闻列表',
      newsList: [{
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }, {
        title: '如何使用Vue.js框架',
        id: 1,
        add_time: new Date(),
        img_url: '../../../static/img/avatar.jpg',
        click_count: 492
      }]
    }
  },
  // created() {
  //   this.$axios.get('getnewslist')
  //   .then(res=> {
  //     this.newsList = res.data.message;
  //   })
  //   .catch(err=>console.log(err))
  // }
}
</script>

<style scoped>
.demo {
  display: flex;
  border-bottom: 2px solid #000;
}
.news-desc {
  margin-left: 10px;
  flex: 1;
}
.newsMeta {
  color: aqua;
}
.publishTime {
  float: right;
}
.tmpl a {
  text-decoration: none;
}
.tmpl a:last-child .demo{
  margin-bottom: 70px;
}
</style>
