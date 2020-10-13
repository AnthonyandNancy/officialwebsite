<template>
  <div class="about">
<!--    <h1>This is an about page</h1>-->
<!--    <el-button type="primary" plain>主要按钮</el-button>-->
    <router-view></router-view>
  </div>
</template>

<script>
import { getList } from '../api/index'
export default {
  name: 'About',
  data() {
    return {

    }
  },
  async mounted() {
    const res = await getList()
    console.log(res)
  }

}
</script>
