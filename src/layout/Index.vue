<template>
  <div class="app">
    <header>


        <sidebar />


    </header>

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
.app{

  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
