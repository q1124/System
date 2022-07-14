<template>
<!-- TODO: 將nav內容抽離 -->
  <div>
    <el-row class="menu_page">
      <el-col :span="12">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#409eff">
          <router-link to="/index/home">
            <el-menu-item index='0'>
              <el-icon><OfficeBuilding /></el-icon>
              <span >首頁</span>
            </el-menu-item>
          </router-link>
          <!-- item children -->
          <template v-for="item in items">
            <el-sub-menu v-if="item.children" :index="item.url" :key="item.url">
              <template #title>
                <el-icon><Money/></el-icon>
                <span>{{item.name}}</span>
              </template>
              <router-link v-for="list in item.children" :key="list.url" :to="list.url" :id="list.id">
                <el-menu-item>
                  <el-list-item-title v-text="list.name"></el-list-item-title>
                </el-menu-item>
              </router-link>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'nav_bar',
  data () {
    return {
      items: [
        {
          id: 1,
          icon: 'Money',
          name: '資金管理',
          url: 'fund',
          children: [
            {
              name: '資金細項',
              id: 'nav-index-foundList',
              url: '/index/list',
              icon: ''
            }
          ]
        },
        {
          id: 2,
          icon: 'Money',
          name: '信息管理',
          url: 'index',
          children: [
            {
              name: '個人訊息',
              id: 'nav-index-info',
              url: '/index/info',
              icon: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
.el-menu {
  height: 100vh;
  position: absolute;
  border: none;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-submenu, .el-menu-item {
  min-width: 180px;
}
.hiddenDropdown, .hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
