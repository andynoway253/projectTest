<template lang="pug">
el-container(style="height: 500px; border: 1px solid #eee")
  el-header(height="76px")
    Header
  el-container
    el-aside.layout__aside(width="200px")
      Menu
    el-main.layout__container
      router-view
</template>

<script>
import Menu from '@/components/menu'
import Header from '@/components/header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Menu,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
