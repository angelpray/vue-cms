<template>
  <div class='content'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OrderContent',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}
</style>
