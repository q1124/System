<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">後台管理系統</span>
        <!-- TODO:  component -->
        <el-form
          :model="registerUser"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="80px"
          class="registerForm"
        >
          <el-form-item label="名稱" prop="name">
            <el-input
              v-model="registerUser.name"
              placeholder='請輸入使用者名稱'
            ></el-input>
          </el-form-item>
          <el-form-item label="電子信箱" prop="email">
            <el-input
              v-model="registerUser.email"
              placeholder='請輸入email'
            ></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              type='password'
              v-model="registerUser.password"
              placeholder='請輸入使用者密碼'
            ></el-input>
          </el-form-item>
          <el-form-item label="確認密碼" prop="checkPassword">
            <el-input
              type='password'
              v-model="registerUser.checkPassword"
              placeholder='確認密碼'
            ></el-input>
          </el-form-item>
          <el-form-item label="身份類別">
           <el-select v-model="registerUser.identity" placeholder="身份類別">
            <el-option label="管理員" value="manager"></el-option>
            <el-option label="員工" value="employee"></el-option>
           </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')"
              >註冊</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    // 驗證密碼
    const validatePass = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error('密碼不一致'))
      } else {
        callback()
      }
    }
    return {
      registerUser: {
        name: '',
        email: '',
        password: '',
        checkPassword: '',
        identity: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '名稱不能空白',
            // 何時觸發
            trigger: 'blur'
          },
          {
            min: 2,
            max: 30,
            message: '長度不符合',
            // 何時觸發
            trigger: 'blur'
          }
        ],
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
        ],
        checkPassword: [
          {
            required: true,
            message: '確認密碼不能為空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 30,
            message: '長度不符合'
          },
          // 驗證規則
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (Form) {
      this.$refs[Form].validate(valid => {
        if (valid) {
          this.$axios.post('/api/users/register', this.registerUser)
            .then(res => {
              this.$message({
                message: '帳號註冊成功',
                type: 'success'
              })
            })

          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
.register {
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

.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit_btn{
  width: 100%;
}
</style>
