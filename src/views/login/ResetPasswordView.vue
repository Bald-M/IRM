<template>

  <!-- This view should use token for security -->
  <div class="container">


    <!-- Form component from Element Plus with validation rules and status icons. It uses `model` to bind form data and `rules` for validating the input fields. The `label-width` is set to "auto" so that labels adjust based on content. -->
    <el-form :model="form" :rules="rules" ref="ruleFormRef" class="form" label-width="auto" :label-position="top"
      status-icon>

      <!-- Wintec Logo section centered horizontally using Flexbox -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg"
          class="industry-internship-system-logo" />
      </div>

      <!-- Form Header: Displayed text asking the user to choose a new password -->
      <el-form-item class="mt-1">
        <el-text class="text-header">Choose a new password for your account</el-text>
      </el-form-item>

      <!-- New Password input field: Bound to the `form.password` model and validated by the `prop="password"` rule. The input field is of type "password", with options to toggle visibility (`show-password`) and clear the content (`clearable`). -->
      <el-form-item label="New Password" prop="password">
        <el-input v-model="form.password" type="password" show-password clearable></el-input>
      </el-form-item>

      <!-- Confirm Password input field: Bound to the `form.confirmedPassword` model and validated by the `prop="confirmedPassword"` rule. This input field is also a password field with similar options as above for visibility and clearing content. -->
      <el-form-item label="Confirm Password" prop="confirmedPassword">
        <el-input v-model="form.confirmedPassword" type="password" show-password clearable></el-input>
      </el-form-item>

      <!-- Reset Password Button -->
      <el-form-item>
        <el-button type="primary" @click="resetPassword(ruleFormRef)">Reset Password</el-button>
      </el-form-item>

      <!-- Button to navigate back to the login page -->
      <el-form-item>
        <el-button style="color: #FB9333;" @click="backToLogin">Back to Login</el-button>
      </el-form-item>

    </el-form>

  </div>

</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import { ElMessage, type FormProps, type FormInstance, type FormRules } from 'element-plus'
import type { AxiosInstance } from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// Injecting the Vue Router instance for programmatic navigation
const router = useRouter()
// Injecting Axios for making HTTP requests
const axios: AxiosInstance = inject('$axios') as AxiosInstance
// Using Pinia store for authentication-related data
const authStore = useAuthStore()
// Setting the form label position to "top"
const top = ref<FormProps['labelPosition']>('top')
// Reference to the form instance for validation and other form operations
const ruleFormRef = ref<FormInstance>()
// Emit function to send loading state to the parent component
const emit = defineEmits(['loading'])
// Fetching email and server reference from the authentication store
const email = authStore.email
const server_ref = authStore.server_ref

// Defining the interface for the form data
interface RuleForm {
  password: string,
  confirmedPassword: string,
}

// Reactive object to hold form input values
const form = reactive<RuleForm>({
  password: '',
  confirmedPassword: ''
})

// Function to trigger the loading state by emitting an event to the parent component
const triggerLoading = (value: boolean) => {
  emit('loading', value)
}

// Custom password validation function
// Ensures that the password meets certain criteria like length and inclusion of upper/lower case letters and numbers
const passwordValidation = (rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('This field is required'))
  }

  // Regular expressions to check for different character types
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);

  // Validating password length and character composition
  if (value.length < 8) {
    callback(new Error('Password must be at least 8 characters long.'))
  } else if (!hasUpperCase || !hasLowerCase || !hasNumber) {
    callback(new Error('Password must include uppercase, lowercase letters, and numbers.'))
  } else {
    callback()
  }
}

// Custom validation for confirming that the two password fields match
const confirmPasswordValidation = (rule: any, value: string, callback: any) => {
  if (value !== form.password) {
    callback(new Error('Passwords do not match.'))
  } else {
    callback()
  }
}

// Form validation rules for the password fields
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

// Function to handle password reset process
// It validates the form, sends a request to the server, and handles the response
const resetPassword = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      triggerLoading(true)
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
          'Content-Type': 'application/json'
        }
      }).then(res => {
        // console.log(res)
        // Display success message
        ElMessage.success(res.data.description)
        // Redirect to the login page upon successful password reset
        router.push('/login')
        triggerLoading(false)
        // Clear authentication data from the store
        authStore.clearAuthData()
        // Remove the OTP from localStorage
        localStorage.removeItem('otp')
      }).catch(error => {
        console.log(error)
        // Check if error.response exists to prevent undefined errors
        if (error.response && error.response.data) {
          // Display server error message if available
          ElMessage.error(error.response.data.error)
        } else {
          // Display generic network error message if no response is received
          ElMessage.error('Network error or server not responding. Please try again later.')
        }
        triggerLoading(false)
      })
    } else {
      // console.log(fields)
      triggerLoading(false)
    }
  })
}
// Function to navigate back to the login page when the "Back to Login" button is clicked
const backToLogin = () => {
  router.push('/login')
}

</script>

<style scoped>
/* .container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
} */

.mt-1 {
  margin-top: 1rem;
}

.el-button {
  width: 100%;
}


.text-header {
  color: #6C6B6B;
  font-weight: bold;
}

/* Phone */
@media screen and (max-width: 768px) {
  .form {
    width: 280px;
    height: 460px;
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

  .text-header {
    font-size: 12px;
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

  .text-header {
    font-size: 14px;
  }
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

  .text-header {
    font-size: 14px;
  }
}
</style>