<template>
  <div>
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-head">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <a href="javascript:;" @click="loadImgsById(category.id)">{{category.title}}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="img in imgs" :key="img.id">
          <a href="#">
            <img :src="img.img_url" alt="">
            <p>
              <span>{{img.title}}</span>
              <br>
              <span>{{img.summary}}</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhotoList',
    beforeRouteUpdate (to, from, next) {
      let { categoryId } = to.query
      this.loadImgsById(categoryId)
      next()
    },
    methods: {
      loadImgsById(categoryId) {
        for(let i = 0; i< this.imgs.length; i++) {
          if (this.imgs[i].id === categoryId) {
            this.imgs = [this.imgs[i]]
          }
        }
        console.log(categoryId);
      }
    },
    data() {
      return {
        // 图片数据
        imgs: [{
          id: 50,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 51,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 52,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 53,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 54,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 55,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }, {
          id: 56,
          title: '一些好看的风景图片',
          img_url: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          summary: '非常好看，具有收藏价值的图片'
        }],
        // 分类信息
        categories:[{
          title: '全部',
          id: 0
        }, {
          title: '家居生活',
          id: 50
        }, {
          title: '风景',
          id: 51
        }, {
          title: '动漫卡通',
          id: 52
        }, {
          title: '色彩',
          id: 53
        }]
      }
    },
    // created() {
    //   //  1. 获取分类id
    //   let { categoryId } = this.$route.query;
    //   //  2. 发起请求
    //   this.$axios.get('getimages/' + categoryId)
    //   .then(res => {
    //     //  3. 渲染数据
    //     this.imgs = res.data.message;
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },
  }
</script>

<style scoped>
li {
  list-style: none;
}
.photo-list img {
  width: 100%;
}
</style>
