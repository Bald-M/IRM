<template>
  <div class="container" v-loading="loading">

    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto" class="form" :label-position="top" status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item class="mt-1">
        <el-text style="color: #6C6B6B; font-weight: bold;">Enter the email you used to create your account so we can
          send you instructions on how to reset your password.</el-text>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" :prefix-icon="Message" clearable placeholder="id@student.wintec.ac.nz" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSendButton(ruleFormRef)">Send</el-button>
      </el-form-item>

      <el-form-item>
        <el-button style="color: #FB9333;" @click="handleNavButton">Back to Login</el-button>
      </el-form-item>

    </el-form>

  </div>


</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import { ElMessage, type FormProps, type FormInstance, type FormRules } from 'element-plus'
import { useAuthStore } from '@/stores/auth'
import { Message } from '@element-plus/icons-vue'
import type { Router } from 'vue-router'
import { useRouter } from 'vue-router'
import type { AxiosInstance } from 'axios'


const axios: AxiosInstance = inject('$axios') as AxiosInstance
const router: Router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)
const ruleFormRef = ref<FormInstance>()

interface RuleForm {
  email: string,
}

const form = reactive<RuleForm>({
  email: '',
})


const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { type: 'email', message: 'Invalid email address', trigger: 'blur' }
  ]
})

const top = ref<FormProps['labelPosition']>('top')


const handleSendButton = async (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      // Send Email to user's email address
      axios({
        url: '/api/forgotPassRequest',
        method: 'post',
        data: {
          email: form.email,
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        authStore.setServerRef(res.data.server_ref, form.email)
        ElMessage.success(res.data.description)
        router.push('/resetPassVerification')
        loading.value = false
      }).catch(error => {
        console.log(error)
        // 先检查 error.response 是否存在，防止未定义错误
        if (error.response && error.response.data) {
          // 提示用户错误信息
          ElMessage.error(error.response.data.error)
        } else {
          // 如果 error.response 不存在，提示网络问题或服务器未响应
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

const handleNavButton = () => {
  router.push('/login')
}


</script>


<style scoped>
/* .container {
  display: flex;
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
} */

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.el-button {
  width: 100%;
}

/* Computer */
@media screen and (min-width: 992px) {
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
}
</style>