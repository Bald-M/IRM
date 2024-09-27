<template>

  <!-- This view should use token for security -->
  <div class="container" v-loading="loading">

    <el-form :model="form" :rules="rules" ref="ruleFormRef" class="form" label-width="auto" :label-position="top"
      status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item>
        <el-text style="color: #6C6B6B; font-weight: bold;">Choose a new password for your account</el-text>
      </el-form-item>

      <el-form-item label="New Password" prop="password">
        <el-input v-model="form.password" type="password" show-password clearable></el-input>
      </el-form-item>

      <el-form-item label="Confirm Password" prop="confirmedPassword">
        <el-input v-model="form.confirmedPassword" type="password" show-password clearable></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="resetPassword(ruleFormRef)">Reset Password</el-button>
      </el-form-item>

      <el-form-item>
        <el-button style="color: #FB9333;" @click="backToLogin">Back to Login</el-button>
      </el-form-item>

    </el-form>

  </div>

</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import { ElMessage, type FormProps, type FormInstance, type FormRules } from 'element-plus'
import type { Router } from 'vue-router'
import type { AxiosInstance } from 'axios'
import { useAuthStore } from '@/stores/auth'

const router: Router = inject('$router') as Router
const axios: AxiosInstance = inject('$axios') as AxiosInstance
const authStore = useAuthStore()
const top = ref<FormProps['labelPosition']>('top')
const ruleFormRef = ref<FormInstance>()
const loading = ref(false)
const email = authStore.email
const server_ref = authStore.server_ref

interface RuleForm {
  password: string,
  confirmedPassword: string,
}

const form = reactive<RuleForm>({
  password: '',
  confirmedPassword: ''
})

// Validate if two passwords inputed are correct
const passwordValidation = (rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('This field is required'))
  }

  // Regular expressions for different character types
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);

  if (value.length < 8) {
    callback(new Error('Password must be at least 8 characters long.'))
  } else if (!hasUpperCase || !hasLowerCase || !hasNumber) {
    callback(new Error('Password must include uppercase, lowercase letters, and numbers.'))
  } else {
    callback()
  }
}

const confirmPasswordValidation = (rule: any, value: string, callback: any) => {
  if (value !== form.password) {
    callback(new Error('Passwords do not match.'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<RuleForm>>({
  password: [
    { required: true, message: 'This field is requried', trigger: 'blur' },
    { validator: passwordValidation, trigger: 'blur' }
  ],
  confirmedPassword: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { validator: confirmPasswordValidation, trigger: 'blur' }
  ]
})

const resetPassword = async (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      axios({
        url: '/api/forgotPassChange',
        method: 'post',
        data: {
          email,
          server_ref,
          otp: localStorage.getItem('otp'),
          password: form.password
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        console.log(res)
        ElMessage.success(res.data.description)
        router.push('/login')
        loading.value = false
      }).catch(error => {
        console.log(error)
        if (error.response && error.response.data) {
          ElMessage.error(error.response.data.error)
        } else {
          ElMessage.error('Network error or server not responding. Please try again later.')
        }
        loading.value = false
      })
    } else {
      console.log(fields)
      loading.value = false
    }
  })

}

const backToLogin = () => {
  router.push('/login')
}

</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
}

.el-button {
  width: 100%;
}

/* Computer */
@media screen and (min-width: 992px) {
  .form {
    width: 480px;
    height: 520px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }

  .industry-internship-system-logo {
    height: 150px;
  }

  .radio {
    flex: 0 0 45%;
    border-radius: 1.5rem;
    background-color: white;
  }
}
</style>