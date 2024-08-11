<template>
  <div class="container">

    <el-form :model="form" label-width="auto" class="form" :label-position="top">

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item label="Email">
        <el-input v-model="form.email" :prefix-icon="Message" clearable placeholder="id@student.wintec.ac.nz" />
      </el-form-item>

      <el-form-item label="Username">
        <el-input v-model="form.username" :prefix-icon="User" clearable placeholder="Wintec username" />
      </el-form-item>

      <el-form-item label="Password">
        <el-input v-model="form.password" clearable placeholder="******" />
      </el-form-item>

      <el-form-item label="Confim Password">
        <el-input v-model="form.password" clearable placeholder="******" />
      </el-form-item>

      <el-form-item label="Role">
        <el-radio-group v-model="role">
          <el-radio value="Student" size="large" class="radio">Student</el-radio>
          <el-radio value="Industry" size="large" class="radio">Industry</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin: 0 auto;">Register</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text size="small">Already have an account? <RouterLink to="/login">Log in</RouterLink> </el-text>
      </div>

    </el-form>

  </div>



</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormProps } from 'element-plus'
import { Message, User } from '@element-plus/icons-vue'

const form = reactive({
  email: '',
  username: '',
  password: ''
})


const top = ref<FormProps['labelPosition']>('top')

const role = ref()



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

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
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
    border-radius: 1.5rem;
    background-color: white;
  }
}

/* Tablet */
@media screen and (max-width: 992px) and (min-width: 768px) {
  .form {
    width: 480px;
    height: 680px;
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

/* Computer */
@media screen and (min-width: 992px) {
  .form {
    width: 480px;
    height: 680px;
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