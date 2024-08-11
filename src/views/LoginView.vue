<template>

  <div class="container">
    <el-form :model="form" label-width="auto" class="form" :label-position="top">

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item label="Email" class="mt-2">
        <el-input v-model="form.email" :prefix-icon="Message" clearable placeholder="id@student.wintec.ac.nz" />
      </el-form-item>

      <el-form-item label="Password">
        <el-input v-model="form.password" type="password" clearable placeholder="******" />
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="login">Log In</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text size="small">No account? <RouterLink to="/registration">Register Now
          </RouterLink></el-text>
      </div>

    </el-form>

  </div>

</template>


<script lang="ts" setup>
import { inject, reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'
import { Message } from '@element-plus/icons-vue'
import type { Router } from 'vue-router'

const router: Router = inject('$router') as Router

const form = reactive({
  email: '',
  password: ''
})

const top = ref<FormProps['labelPosition']>('top')

// It depends
// student -> /student/home
// industry -> /industry/home
const login = () => {
  localStorage.setItem('authToken', 'TESTJSONWEBTOKEN123')
  router.push('/student/home')
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

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

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
    height: 440px;
    border-radius: 24px;
    padding: 1rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 120px;
  }
}

/* Tablet */
@media screen and (max-width: 992px) and (min-width: 768px) {
  .form {
    width: 480px;
    height: 480px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 150px;
  }
}

/* Computer */
@media screen and (min-width: 992px) {
  .form {
    width: 480px;
    height: 480px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }

  .industry-internship-system-logo {
    height: 150px;
  }
}

</style>