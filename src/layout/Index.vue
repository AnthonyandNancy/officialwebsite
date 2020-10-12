<template>
  <div>
    <header>

      <div class="sidebar">
        <sidebar />
      </div>

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

<style scoped>

</style>
