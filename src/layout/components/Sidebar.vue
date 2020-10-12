
<template>
  <div>
<!--    第一种方案-->
<!--    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">-->
<!--      <template v-for="(item , index ) in routes">-->
<!--        <el-menu-item v-if="!item.children" :key="index" :index="String(index)" :route="item.path">{{ item.meta.title }}</el-menu-item>-->

<!--        <el-submenu v-if="item.children" :key="index" :index="String(index)">-->
<!--          <template slot="title">{{ item.meta.title }}</template>-->
<!--          <template v-for="(itemChildren , indexChildren ) in item.children">-->
<!--            <el-menu-item :key="indexChildren" :index="resolveIndex(index,indexChildren)" :route="itemChildren.path">{{ itemChildren.meta.title }}</el-menu-item>-->
<!--          </template>-->

<!--        </el-submenu>-->

<!--      </template>-->

<!--    </el-menu>-->
    

  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      activeIndex: '0',
      keyPath: 0,
      routes: []
    }
  },
  mounted() {
    this.routes = this.$router.options.routes[0].children
    console.log(this.$router.options.routes[0].children)
  },
  methods: {
    handleSelect(key, keyPath) {
      this.keyPath = keyPath
      console.log(key, keyPath)
    },
    goPage(e) {
      console.log(e)
      this.$router.push({ path: e })
    },

    resolveIndex(index, indexChildren) {
      console.log(index + '-' + indexChildren)
      return String(index) + -+String(indexChildren)
    }
  }
}
</script>

<style scoped>

</style>
