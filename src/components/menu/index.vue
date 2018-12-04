<template lang="pug">
.side-menu()
  el-radio-group
    el-menu(":router"="true")
      template(v-for="(menuNode, index) in menu")
        el-menu-item(":index"="index.toString()" ":route"="{name: menuNode.route}") {{menuNode.name}}
</template>

<script>
import { } from '@/router'
export default {
  name: 'side-menu',

  data () {
    return {
      menu: [
        {name: '關於', route: 'about'},
        {name: '練習', route: 'practice'},
        {name: '隨便=口=', route: 'casual'}
      ]
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
