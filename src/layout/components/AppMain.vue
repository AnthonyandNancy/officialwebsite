<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  mounted() {
    console.log(this.$route.path)
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
.app-main{

}


</style>
