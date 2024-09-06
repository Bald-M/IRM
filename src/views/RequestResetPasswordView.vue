<template>
  <div class="container">

    <el-form :model="form" :rules="rules" label-width="auto" class="form" :label-position="top" status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item class="mt-1">
        <el-text style="color: #6C6B6B; font-weight: bold;">Enter the email you used to create your account so we can send you instructions on how to reset your password.</el-text>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" :prefix-icon="Message" clearable placeholder="id@student.wintec.ac.nz" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSendButton">Send</el-button>
      </el-form-item>

      <el-form-item>
        <el-button style="color: #FB9333;" @click="handleNavButton">Back to Login</el-button>
      </el-form-item>

    </el-form>

  </div>


</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import type { FormProps, FormRules } from 'element-plus'
import { Message } from '@element-plus/icons-vue'
import type { Router } from 'vue-router'


const router: Router = inject('$router') as Router

interface RuleForm {
  email: string,
}

const form = reactive<RuleForm>({
  email: '',
})


const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: 'This field is required', trigger: 'blur'},
    { type: 'email', message: 'Invalid email address', trigger: 'blur'}
  ]
})

const top = ref<FormProps['labelPosition']>('top')


const handleSendButton = () => {
  // Send Email to user's email address
  router.push('/reset-password/confirmation')
}

const handleNavButton = () => {
  router.push('/login')
}



</script>


<style scoped>
.container {
  display: flex;
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
}

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