<template>

  <div class="container">
    <el-form ref="ruleFormRef" label-width="auto" class="form" status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg" class="industry-internship-system-logo" />
      </div>

      <!-- Header Text -->
      <div style="display: flex; justify-content: center;" class="mt-1">
        <el-text class="text-header">Please check your email</el-text>
      </div>

      <!-- Email Information Text -->
      <div style="display: flex; justify-content: center;">
        <el-text class="text-sub-header">We've sent a code to&nbsp;</el-text>
        <el-text class="text-sub-header" style="color: black;">{{ email }}</el-text>
      </div>

      <!-- Code Input Fields -->
      <div class="code-container">
        <!-- Input fields for the verification code -->
        <input v-model="codes[index]" v-for="(code, index) in codes" :key="index" maxlength="1" class="code-input" @input="handleInput(index, $event)" @keydown="handleKeydown(index, $event)" ref="inputRef" />
      </div>

      <!-- Verify Button -->
      <el-form-item class="mt-1">
        <el-button type="primary" @click="handleVerify">Verify</el-button>
      </el-form-item>

      <!-- Resend Link -->
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
import { ElMessage } from 'element-plus'
import type { Router } from 'vue-router'
import type { AxiosInstance } from 'axios'

// Array to store each digit of the verification code
const codes = ref(['', '', '', '', '', ''])
// Reference array for input elements
const inputRef = ref<(HTMLInputElement | null)[]>([])
// Import the authentication store
const authStore = useAuthStore()
// Inject the Axios instance
const axios: AxiosInstance = inject('$axios') as AxiosInstance
// Setup the router instance
const router: Router = useRouter()
// Define emits for loading state
const emit = defineEmits(['loading'])

// Computed property for user email from auth store
const email = computed(() => authStore.email)
// Reference to the server's verification reference from the auth store
const serverRef = authStore.server_ref
// Handle input in each code box, auto-focuses to next box if filled
const handleInput = (index: number, event: any) => {
  const value = event.target.value
  codes.value[index] = value
  // If current box has a value, move to next box
  if (value && index < codes.value.length - 1) {
    const nextInput = event.target.nextElementSibling
    if (nextInput) {
      nextTick(() => {
        nextInput.focus()
      })
    }
  }
}

// Function to emit loading state changes
const triggerLoading = (value: boolean) => {
  emit('loading', value)
}

// Handle key events for code boxes, allowing navigation with arrows and backspace
const handleKeydown = (index: number, event: any) => {
  // Backspace to clear and focus previous box if empty
  if (event.key === 'Backspace' && !event.target.value && index > 0) {
    const prevInput = event.target.previousElementSibling
    if (prevInput) {
      nextTick(() => {
        prevInput.focus()
      })
    }
  } 
  // Right arrow to move to next box
  else if (event.key === 'ArrowRight') {
    const nextInput = event.target.nextElementSibling
    if (nextInput) {
      nextTick(() => {
        nextInput.focus()
      })
    }
  } 
  // Left arrow to move to previous box
  else if (event.key === 'ArrowLeft') {
    const prevInput = event.target.previousElementSibling
    if (prevInput) {
      nextTick(() => {
        prevInput.focus()
      })
    }
  }
}

// Send verification code to server for verification
const handleVerify = () => {
  triggerLoading(true)
  let code = ''
  for(let i = 0; i < codes.value.length; i++) {
    code += codes.value[i]
  }
  axios({
    url: '/api/emailVerification',
    method: 'post',
    data: {
      server_ref: serverRef,
      otp: code
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    // console.log(res)
    ElMessage.success(res.data.description)
    triggerLoading(false)
    router.push('/login')
    authStore.clearAuthData()
    localStorage.removeItem('otp')
  }).catch(error => {
    codes.value = ['', '', '', '', '', '']
    console.log(error)
    ElMessage.error(error.response.data.error)
    triggerLoading(false)
  })
}

// Resend verification code via API
const handleResend = () => {
  triggerLoading(true)
  axios({
    url: '/api/sendOTP',
    method: 'post',
    data: {
      server_ref: serverRef,
    },
    headers: {
      'Content-Type': 'application/json '
    }
  }).then(res => {
    // Clear input fields on resend
    codes.value = ['', '', '', '', '', '']
    // console.log(res)
    ElMessage.success(res.data.description)
    triggerLoading(false)
  }).catch(error => {
    console.log(error)
    // ElMessage.error(error.response.data.error)
    triggerLoading(false)
  })
}

// Focus on the first code input field when the component is mounted
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

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
}

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
