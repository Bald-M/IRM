<template>

  <!-- This view should use token for security -->
  <div class="container">

    <el-form :model="form" :rules="rules" class="form" label-width="auto" :label-position="top" status-icon>
      
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
        <el-button type="primary" @click="resetPassword">Reset Password</el-button>
      </el-form-item>

      <el-form-item>
        <el-button style="color: #FB9333;" @click="backToLogin">Back to Login</el-button>
      </el-form-item>

    </el-form>

  </div>

</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import type { FormProps, FormRules } from 'element-plus'
import type { Router } from 'vue-router'

const router: Router = inject('$router') as Router

const top = ref<FormProps['labelPosition']>('top')

interface RuleForm {
  password: string,
  confirmedPassword: string,
}

const form = reactive<RuleForm>({
  password: '',
  confirmedPassword: ''
})

// Validate if two passwords inputed are correct
const passwordValidation = (rule: any, value: any, callback: any) => {
  if (value !== form.password) {
    callback(new Error('Passwords do not match'))
  }
}

const rules = reactive<FormRules<RuleForm>>({
  password: [
    { required: true, message: 'This field is requried', trigger: 'blur'},
    { min: 8, message: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, and special characters', trigger: 'blur'}
  ],
  confirmedPassword: [
    { required: true, message: 'This field is required', trigger: 'blur'},
    { validator: passwordValidation, trigger: 'blur' }
  ]
})

const resetPassword = () => {
  // POST to reset password API
  // Navigate to success view
  router.push('/reset-password/success')
}

const backToLogin = () => {
  router.push('/login')
}

</script>

<style scoped>

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
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