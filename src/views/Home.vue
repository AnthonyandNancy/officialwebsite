<template>
  <div class="home">
    <el-button type="primary" plain @click="getList">主要按钮</el-button>
  </div>
</template>

<script>
import { getList } from '../api/index'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    async getList() {
      const data = await getList().then(res => res).catch(err => {
        console.log(err)
      })
      console.log('>>', data)
    }
  }

}
</script>
