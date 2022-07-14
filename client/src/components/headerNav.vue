<template>
  <header class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <span class="title">後台管理系統</span>
      </el-col>
      <el-col :span="6" class="user">
        <div class="userInfo">
          <img :src="user.avatar" class="avatar" alt="">
          <div class="welcome">
            <p class="name comeName">Hi</p>
            <p class="name avatarName">{{user.name}}</p>
          </div>
          <span class="userName">
            <el-dropdown trigger="click" @command="setDialogInfo">
              <span class="el-dropdown-link">
                <el-icon><arrow-down /></el-icon>
              </span>
              <!-- vue3 v-slot -->
              <template v-slot:dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="info">個人訊息</el-dropdown-item>
                    <el-dropdown-item command="logout">登出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </span>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'head-nav',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    setDialogInfo (cmdItem) {
      switch (cmdItem) {
        case 'info':
          this.showInfoList()
          break
        case 'logout':
          this.logout()
          break
      }
    },
    showInfoList () {
      this.$router.push('/index/info')
    },
    logout () {
      // clear token
      localStorage.clear()
      // vuex
      this.$store.dispatch('clearCurrentState')
      // 跳轉
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }
  .head-nav {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: #324057;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;
  }
  .el-row {
    justify-content: space-between;
  }
  .logo-container {
    line-height: 60px;
    min-width: 400px;
  }

  .user {
    line-height: 60px;
    text-align: right;
    float: right;
    padding-right: 10px;
  }

  .title {
    vertical-align: middle;
    font-size: 22px;
    letter-spacing: 1px;
    padding-left: 20px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }

  .welcome {
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 0 20px;
  }

  .name {
    line-height: 20px;
    text-align: left;
    font-size: 14px;
  }

  .comeName {
    font-size: 12px;
  }

  .avatarName {
    color: #eeeeee;
    font-weight: bolder;
  }

  .userName {
    cursor: pointer;
    margin-right: 5px;
  }

  .el-dropdown {
    color: #fff;
    vertical-align: inherit
  }

</style>
