<template>
  <div class="container">

    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto" class="form" :label-position="top"
      status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_Orange and Blue.svg" class="industry-internship-system-logo" />
      </div>

      <!-- Form item for selecting the user role -->
      <el-form-item label="Role" prop="role" class="mt-2" @change="handleChange">
        <el-radio-group v-model="form.role">
          <el-radio value="Student" size="large" class="radio">Student</el-radio>
          <el-radio value="Industry" size="large" class="radio">Industry</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- Form item for email input -->
      <el-form-item label="Email" class="mt-2" prop="email">
        <el-input v-model="form.email" clearable placeholder="id@student.wintec.ac.nz" v-if="autoComplete === true"
          @blur="handleBlur" data-test="username-field" />
        <el-input v-model="form.email" clearable placeholder="mail@example.com" data-test="username-field" v-else />
      </el-form-item>

      <!-- Form item for password input -->
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" clearable placeholder="******" show-password data-test="password-field"  />
      </el-form-item>

      <!-- Form item for confirming the password -->
      <el-form-item label="Confirm Password" prop="confirmedPassword">
        <el-input v-model="form.confirmedPassword" type="password" clearable placeholder="******" show-password data-test="confirm-password-field"  />
      </el-form-item>

      <!-- Button to create an account -->
      <el-form-item>
        <el-button type="primary" style="margin: 0 auto;" @click="handleRegistration(ruleFormRef)">Create
          Account</el-button>
      </el-form-item>

      <!-- Link to log in if the user already has an account -->
      <div style="text-align: center;">
        <el-text size="small">Already have an account? <RouterLink to="/login">Log in</RouterLink> </el-text>
      </div>

    </el-form>

  </div>


</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/stores/auth'
import type { FormProps, FormRules, FormInstance } from 'element-plus'
import type { AxiosInstance } from 'axios'

// Injecting the Axios instance for making API requests
const axios: AxiosInstance = inject('$axios') as AxiosInstance
// Using Vue Router for navigation
const router = useRouter()
// Accessing the authentication store
const authStore = useAuthStore()
// Emitting loading state for UI feedback
const emit = defineEmits(['loading'])

// Interface defining the structure of the form data
interface RuleForm {
  email: string,
  password: string,
  confirmedPassword: string,
  role: string,
  currentTime: Date
}

// Reference to the form instance for validation
const ruleFormRef = ref<FormInstance>()

// Function to trigger loading state
const triggerLoading = (value: boolean) => {
  emit('loading', value)
}

// Reactive form data model
const form = reactive<RuleForm>({
  email: '',
  password: '',
  confirmedPassword: '',
  role: 'Student',
  currentTime: new Date()
})

// Custom validation function for the password
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

// Custom validation function for confirming the password
const confirmPasswordValidation = (rule: any, value: string, callback: any) => {
  if (value !== form.password) {
    // Password mismatch validation
    callback(new Error('Passwords do not match.'))
  } else {
    // Validation passed
    callback()
  }
}

// Reactive rules for form validation
const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { type: 'email', message: 'Invalid email address', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'This field is requried', trigger: 'blur' },
    { validator: passwordValidation, trigger: 'blur' }
  ],
  confirmedPassword: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { validator: confirmPasswordValidation, trigger: 'blur' }
  ],
  role: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ]
})


const top = ref<FormProps['labelPosition']>('top')
// Flag to control email auto-completion based on role selection
const autoComplete = ref(true)

// Function to handle role change and set email auto-completion
const handleChange = () => {
  switch (form.role) {
    case "Student":
      // Enable auto-complete for students
      autoComplete.value = true
      break
    case "Industry":
      autoComplete.value = false
      break
  }
}
// Function to handle email input blur event for domain correction
const handleBlur = () => {
  const correctDomain = '@student.wintec.ac.nz'
  if (!form.email.endsWith(correctDomain)) {
    if (form.email.includes('@')) {
      form.email = form.email.split('@')[0] + correctDomain;
    } else {
      form.email += correctDomain;
    }
  }
}

// Function to handle registration logic
const handleRegistration = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      triggerLoading(true)
      axios({
        url: '/api/registration',
        method: 'post',
        data: {
          email: form.email,
          password: form.password,
          type: form.role,
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        // Display success message
        ElMessage.success(res.data.description)
        triggerLoading(false)
        // Store server reference
        authStore.setServerRef(res.data.server_ref, form.email)
        // Navigate to email verification page
        router.push('/emailVerification')
      }).catch(error => {
        console.log(error)
        // Check if error.response exists to prevent undefined errors
        if (error.response && error.response.data) {
          // Display error message from the server
          ElMessage.error(error.response.data.error)
        } else {
          // Display network error message if response is not available
          ElMessage.error('Network error or server not responding. Please try again later.')
        }
        triggerLoading(false)
      })
    }
    else {
      // Handle validation failure
      console.log(fields)
      triggerLoading(false)
      ElMessage.error("Submit Failure. Please check the error message down input fields")
    }
  })

}

</script>


<style scoped>
/* Override */
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

/* .container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
} */

.mt-2 {
  margin-top: 2rem;
}

.mt-3 {
  margin-top: 3rem;
}


/* Phone */
@media screen and (max-width: 768px) {
  .form {
    width: 280px;
    height: 620px;
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
    height: 640px;
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
    height: 640px;
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