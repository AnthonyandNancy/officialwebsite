<template>
  <div class="about">
    <div v-if="!role">
      <h1>This is an about page</h1>
      <el-button type="primary" plain>主要按钮</el-button>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>

        <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>   <div>2</div><br>
    </div>
    <div v-if="role">
      <router-view />
    </div>

  </div>
</template>

<script>
import { getList } from '../api/index'
export default {
  name: 'About',
  data() {
    return {
      role: false
    }
  },

  created() {
    this.getRole()
  },
  async mounted() {
    const res = await getList()
    console.log(res)
  },
  methods: {
    getRole() {
      const name = this.$route.meta.role
      const data = localStorage.getItem(name)
      // console.log(data)
      if (data) {
        this.role = true
      }
    }
  }

}
</script>
