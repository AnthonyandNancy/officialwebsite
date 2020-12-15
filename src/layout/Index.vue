<template>
  <div class="app">
    <el-container>
      <el-header> <sidebar /></el-header>
      <el-main> <app-main /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
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
.app {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
