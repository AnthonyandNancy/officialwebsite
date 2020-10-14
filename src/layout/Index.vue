<template>
  <div class="app container">

    <sidebar />
    <br><br><br><br><br>
    <app-main />

  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
export default {
  name: 'Index',
  components: {
    AppMain,
    Sidebar
  }
}
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap.scss";
</style>
