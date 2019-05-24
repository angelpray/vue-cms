<template>
  <div class="tmpl">
    <nav-bar :title="title"/>
    <div class="news-detail">
      <h2 class="news-title">{{newsDetail.news_title}}</h2>
      <div class="news-meta">
        <span>点击次数：{{newsDetail.click_count}}</span>
        <span>添加时间：{{newsDetail.add_time | convertTime('YYYY-MM-DD')}}</span>
        <p>分类：民生经济</p>
      </div>
      <div class="news-content">{{newsDetail.news_content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      title: '新闻详情',
      newsDetail: {
        news_title: '如何学习vue.js框架',
        click_count: 0,
        add_time: new Date(),
        news_content: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
      }
    }
  },
  // created() {
  //   let { id } = this.$route.params
  //   this.$axios.get(`getnew/${id}`)
  //   .then(res=> {
  //     this.newsDetail = res.data.message[0];
  //   })
  //   .catch(err=>console.log(err))
  // }
}
</script>

<style scoped>

</style>
