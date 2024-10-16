<template>

  <div class="container" v-loading="loading">
    <el-form ref="ruleFormRef" class="form" status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg" class="industry-internship-system-logo" />
      </div>

      <div style="display: flex; justify-content: center;" class="mt-1">
        <el-text class="text-header">Please check your email</el-text>
      </div>

      <div style="display: flex; justify-content: center;">
        <el-text class="text-sub-header">We've sent a code to&nbsp;</el-text>
        <el-text class="text-sub-header" style="color: black;">{{ email }}</el-text>
      </div>

      <div class="code-container">
        <input v-model="codes[index]" v-for="(code, index) in codes" :key="index" maxlength="1" class="code-input" @input="handleInput(index, $event)" @keydown="handleKeydown(index, $event)" ref="inputRef" />
      </div>

      <el-form-item class="mt-1">
        <el-button type="primary" @click="handleVerify">Verify</el-button>
      </el-form-item>

      <el-form-item class="mt-1">
        <el-button style="color: #FB9333;" @click="handleNavButton">Back to Login</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text>Didn't receive an email?&nbsp;</el-text>
        <el-text style="color: black; font-weight: bold; cursor: pointer;" @click="handleResend">Resend</el-text>
      </div>

    </el-form>

  </div>

</template>


<script lang="ts" setup>
import {  ref, nextTick, onMounted, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { type FormProps, type FormRules, type FormInstance, ElMessage } from 'element-plus'
import type { Router } from 'vue-router'
import type { AxiosInstance } from 'axios'

const loading = ref(false)
const codes = ref(['', '', '', '', '', ''])
const inputRef = ref<(HTMLInputElement | null)[]>([])
const authStore = useAuthStore()
const axios: AxiosInstance = inject('$axios') as AxiosInstance
const router: Router = useRouter()

const email = authStore.email
const serverRef = authStore.server_ref
const handleInput = (index: number, event: any) => {
  const value = event.target.value
  codes.value[index] = value
  // Jump over to the next field
  if (value && index < codes.value.length - 1) {
    const nextInput = event.target.nextElementSibling
    if (nextInput) {
      nextTick(() => {
        nextInput.focus()
      })
    }
  }
}

const handleKeydown = (index: number, event: any) => {
  // Handle Delete Operation
  if (event.key === 'Backspace' && !event.target.value && index > 0) {
    const prevInput = event.target.previousElementSibling
    if (prevInput) {
      nextTick(() => {
        prevInput.focus()
      })
    }
  } else if (event.key === 'ArrowRight') {
    const nextInput = event.target.nextElementSibling
    if (nextInput) {
      nextTick(() => {
        nextInput.focus()
      })
    }
  } else if (event.key === 'ArrowLeft') {
    const prevInput = event.target.previousElementSibling
    if (prevInput) {
      nextTick(() => {
        prevInput.focus()
      })
    }
  }
}

const handleVerify = () => {
  loading.value = true
  let code = ''
  for(let i = 0; i < codes.value.length; i++) {
    code += codes.value[i]
  }
  axios({
    url: '/api/forgotPassVerify',
    method: 'post',
    data: {
      server_ref: serverRef,
      email,
      otp: code
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res)
    localStorage.setItem('otp', code)
    ElMessage.success(res.data.description)
    loading.value = false
    router.push('/resetPassword')
  }).catch(error => {
    codes.value = ['', '', '', '', '', '']
    console.log(error)
    if (error.response && error.response.data) {
      ElMessage.error(error.response.data.error)
    } else {
      ElMessage.error('Network error or server not responding. Please try again later.')
    }
    loading.value = false
  })
}

const handleResend = () => {
  loading.value = true
  axios({
    url: '/api/sendOTP',
    method: 'post',
    data: {
      server_ref: serverRef,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    codes.value = ['', '', '', '', '', '']
    console.log(res)
    ElMessage.success(res.data.description)
    loading.value = false
  }).catch(error => {
    console.log(error)
    // ElMessage.error(error.response.data.error)
    loading.value = false
  })
}

const handleNavButton = () => {
  router.push('/login')
}

onMounted(() => {
  if (inputRef.value && inputRef.value[0]) {
    inputRef.value[0].focus()
  }
})

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

/* .container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
} */

.text-header {
  font-weight: bold;
  color: black;
  font-size: 28px;
}

.text-sub-header {
  font-weight: bold;
  color: #7B7A7B;
  font-size: 12px;
}

.code-container {
  display: flex;
  justify-content: center;
}

.code-input {
  height: 40px;
  width: 40px;
  border: gray 2px solid;
  border-radius: 8px;
  margin: 20px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: text;
  text-align: center;
  line-height: 40px;
}

.code-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px #007bff;
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
