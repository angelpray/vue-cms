// vue插件必须具有install函数

function Installer() {
  // 自身初始化行为
}

Installer.install = function (Vue) {
  // 接收Vue的构造函数，给原型挂载属性或注册全局组件或过滤器

  // 1:注册全局组件
  Vue.component('test', {
    template: '<h1>test</h1>'
  })
  // 2.挂载属性
  // Vue.prototype.$log = function () {
  //   console.log('test')
  // }
  // this.$log = 'asdfasdfas'; 子类对象可以修改父类的属性
  const log = function () {
    console.log('我们自己插件的log函数')
  }
  // 给原型定义属性的获取和设置
  Object.defineProperty(Vue.prototype, '$log', {
    // 设置$log属性时的行为 || 不给，不能设置
    set(newV) {
      console.log('你做梦')
      // log = newV;
    },
    get() {
      // 获取方式
      return log
    }
  })
}

export default Installer
