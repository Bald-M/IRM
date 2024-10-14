<template>

  <div class="container" v-loading="loading">
    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto" class="form" :label-position="top"
      status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item label="Email" class="mt-2" prop="email">
        <el-input v-model="form.email" clearable placeholder="mail@example.com" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" clearable placeholder="******" show-password />
      </el-form-item>

      <div style="display: flex; flex-flow: row-reverse;">
        <el-text size="small">
          <RouterLink to="/reset-password/request" style="color: #6B7280;">Forgot password?</RouterLink>
        </el-text>
      </div>

      <el-form-item class="mt-1">
        <el-button type="primary" @click="handleLogin(ruleFormRef)">Log In</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text size="small">No account yet? <RouterLink to="/registration">Create account
          </RouterLink></el-text>
      </div>

    </el-form>

  </div>

</template>


<script lang="ts" setup>
import { reactive, ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { type FormProps, type FormRules, type FormInstance, ElMessage } from 'element-plus'
import type { Router } from 'vue-router'
import type { AxiosInstance } from 'axios'

const authStore = useAuthStore()
const router: Router = useRouter() as Router
const axios: AxiosInstance = inject('$axios') as AxiosInstance
const ruleFormRef = ref<FormInstance>()

const loading = ref(false)

interface RuleForm {
  email: string,
  password: string,
  role: string
}

const form = reactive<RuleForm>({
  email: '',
  password: '',
  role: 'Student'
})

const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { type: 'email', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ]
})


const top = ref<FormProps['labelPosition']>('top')

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      axios({
        url: '/api/login',
        method: 'post',
        data: {
          email: form.email,
          password: form.password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        authStore.setAuthData(res.data.auth_key, res.data.profile_data.name, res.data.profile_data.email, res.data.profile_data.app_uid, res.data.profile_data.user_type)
        console.log(res)
        ElMessage.success("Successfully Login")
        switch (res.data.profile_data.user_type) {
          case 'Student':
            router.push('/student/application')
            break
          case 'Industry':
            router.push('/client/panel')
            break
          default:
            router.push('/')
            break
        }
        loading.value = false
      }).catch(error => {
        console.log(error)
        // 先检查 error.response 是否存在，防止未定义错误
        if (error.response && error.response.data) {
          // 提示用户错误信息
          ElMessage.error(error.response.data.error)

          // 如果错误消息是 OTP 已发送，跳转到 emailVerification 页面
          if (error.response.data.error === 'OTP sent, Email verification required') {
            authStore.setServerRef(error.response.data.server_ref, form.email)
            router.push('/emailVerification')
          }
        } else {
          // 如果 error.response 不存在，提示网络问题或服务器未响应
          ElMessage.error('Network error or server not responding. Please try again later.')
        }
        loading.value = false
      })
    }
    else {
      // When fail form validation
      console.log(fields)
      loading.value = false
      // ElMessage.error("Submit Failure. Please check the error message down input fields")
    }
  })
}

</script>

<style scoped>
a {
  text-decoration: none;
  color: #FB9333;
}

button {
  width: 100%;
}

.el-radio-group {
  width: 100%;
}

.el-radio {
  display: flex;
  justify-content: center;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.mt-3 {
  margin-top: 3rem;
}

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
}

/* Phone */
@media screen and (max-width: 768px) {
  .form {
    width: 280px;
    height: 360px;
    border-radius: 24px;
    padding: 1rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 120px;
  }

  .radio {
    flex: 0 0 43%;
    border-radius: 9px;
    background-color: white;
  }
}

/* Tablet */
@media screen and (max-width: 992px) and (min-width: 768px) {
  .form {
    width: 480px;
    height: 500px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 150px;
  }

  .radio {
    flex: 0 0 45%;
    border-radius: 9px;
    background-color: white;
  }
}

/* Computer */
@media screen and (min-width: 992px) {
  .form {
    width: 480px;
    /* 600 */
    height: 500px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }

  .industry-internship-system-logo {
    height: 150px;
  }

  .radio {
    flex: 0 0 45%;
    border-radius: 9px;
    background-color: white;
  }
}
</style>
