<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">登入後台管理系統</span>
        <!-- TODO:  component -->
        <el-form
          :model="loginUser"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="80px"
          class="loginForm"
        >
          <el-form-item label="電子信箱" prop="email">
            <el-input
              v-model="loginUser.email"
              placeholder='請輸入email'
            ></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              type='password'
              v-model="loginUser.password"
              placeholder='請輸入使用者密碼'
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')"
              >登入</el-button
            >
          </el-form-item>
          <div class="tiparea">
            <p>還沒有帳號? 現在 <router-link to="/register">註冊</router-link></p>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  name: 'index',
  data () {
    return {
      loginUser: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: '信箱格式不正確',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密碼不能為空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 30,
            message: '長度不符合'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (Form) {
      this.$refs[Form].validate(valid => {
        if (valid) {
          this.$axios.post('/api/users/login', this.loginUser)
            .then(res => {
              // take token
              const { token } = res.data
              localStorage.setItem('token', token)

              // 解析token
              const decoded = jwtDecode(token)

              // token vues
              this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
              this.$store.dispatch('setUser', decoded)
            })
        }
        this.$router.push('/index')
      })
    },
    // 判斷是否為空
    isEmpty (value) {
      return value === undefined || value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    }
  }
}
</script>

<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(64, 132, 233);
    background-size: 100% 100%;
  }
  .form_container {
    width: 370px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }
  .form_container .manage_tip .title {
    font-weight: bold;
    font-size: 26px;
    color: rgb(255, 255, 255);
  }

  .loginForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }
  .submit_btn{
    width: 100%;
  }
  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
  }

  .tiparea p a {
    color: #409eff;
  }
</style>
