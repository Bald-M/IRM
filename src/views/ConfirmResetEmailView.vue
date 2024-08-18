<template>
  <div class="container">
    <div class="box">
      
      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <div class="mt-1">
        <!-- Email should be dynamic -->
        <el-text style="color: #6C6B6B; font-weight: bold;">We have sent an email with password reset information to z******6@student.wintec.ac.nz.</el-text>
      </div>

      <div class="mt-1">
        <el-text style="color: #6C6B6B; font-weight: bold;">Didn't receive the email? Check your spam or promotion folder, or try resending it.</el-text>
      </div>

      <div class="mt-1">
        <el-button type="primary">Resend Email</el-button>
      </div>

      <div class="mt-1">
        <el-button style="color: #FB9333;" @click="handleNavButton">Back to Login</el-button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

import { inject } from 'vue'
import type { Router } from 'vue-router'

const router: Router = inject('$router') as Router

const handleNavButton = () => {
  router.push('/login')
}

</script>



<style scoped>


.container {
  display: flex;
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
  align-items: center;
  justify-content: center;
}

.mt-1 {
  margin-top: 1rem;
}

.el-button {
  width: 100%;
}


/* Computer */
@media screen and (min-width: 992px) {
  .box{
    width: 480px;
    height: 450px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }

  .industry-internship-system-logo {
    height: 150px;
  }
}
</style>