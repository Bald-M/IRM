<template>

  <div class="container">
    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto" class="form" :label-position="top" status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item label="Email / Username" class="mt-2" prop="emailOrUsername">
        <el-input v-model="form.emailOrUsername" clearable placeholder="id@student.wintec.ac.nz" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" clearable placeholder="******" show-password />
      </el-form-item>

      <div style="display: flex; flex-flow: row-reverse;">
        <el-text size="small"><RouterLink to="/reset-password/request" style="color: #6B7280;">Forgot password?</RouterLink></el-text>
      </div>

      <el-form-item class="mt-1">
        <el-button type="primary" @click="login(ruleFormRef)">Log In</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text size="small">No account yet? <RouterLink to="/registration">Create account
          </RouterLink></el-text>
      </div>

    </el-form>

  </div>

</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import type { FormProps, FormRules, FormInstance } from 'element-plus'
import type { Router } from 'vue-router'


const router: Router = useRouter() as Router

const ruleFormRef = ref<FormInstance>()

interface RuleForm {
  emailOrUsername: string,
  password: string,
}

const form = reactive<RuleForm>({
  emailOrUsername: '',
  password: '123456'
})

const validateEmailOrUsername = (rule: any, value: any, callback: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  if (!value) {
    return callback(new Error('Please enter email or username'));
  } else if (emailRegex.test(value)) {
    return callback(); // Valid email
  } else if (usernameRegex.test(value)) {
    return callback(); // Valid username
  } else {
    return callback(new Error('Invalid email or username'));
  }
}

const rules = reactive<FormRules<RuleForm>>({
  emailOrUsername: [
    { required: true, message: 'This field is required', trigger: 'blur' },
    { validator: validateEmailOrUsername, trigger: 'blur'}
  ],
  password: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ]
})

const top = ref<FormProps['labelPosition']>('top')

// It depends
// student -> /student/home
// industry -> /industry/home
// admin -> /admin/panel
const login = async (formEl: FormInstance | undefined) => {
  if(!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit')

      if (form.emailOrUsername.toLowerCase() === 'sue') {
        localStorage.setItem('authToken', 'TESTJSONWEBTOKENADMIN')
        router.push('/admin/panel')
      }
      else if (form.emailOrUsername.includes('student.wintec.ac.nz')) {
        localStorage.setItem('authToken', 'TESTJSONWEBTOKENSTUDENT')
        router.push('/student/home')
      }
      else {
        alert('Username: sue or your wintec student email, leave the password field, then press log in')
      }
    }
    else {
      console.log('error submit', fields)
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

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
  align-items: center;
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