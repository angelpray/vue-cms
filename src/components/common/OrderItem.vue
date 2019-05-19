<template>
  <div class="item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'OrderItem',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.content .item{
  flex: 1;
  flex-basis: 33.33%;
  max-width: 33.33%;
  text-align: center;
}
.item a{
  text-decoration: none;
}
.item /deep/ .item-img {
  width: 50%;
}
</style>

