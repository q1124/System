<template>
  <div class="info">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="user">
          <img :src="user.avatar" alt="" class="avatar">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="userInfo">
          <div class="user-item">
            <el-icon><Avatar /></el-icon><span>名稱: {{user.name}}</span>
          </div>
          <div class="user-item">
            <el-icon><Message /></el-icon><span>帳號: {{user.email}}</span>
          </div>
          <div class="user-item">
            <el-icon><Flag /></el-icon><span>身份: {{user.identity === 'manager' ? '管理員' : '普通員工'}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'info',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style scoped>
.info {
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userInfo {
  position: relative;
  top: 30%;
}
.user-item {
  display: block;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
