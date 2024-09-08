<template>
  <div class="container" v-loading="loading">

    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto" class="form" :label-position="top"
      status-icon>

      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <el-form-item label="Role" prop="role" class="mt-2" @change="handleChange">
        <el-radio-group v-model="form.role">
          <el-radio value="Student" size="large" class="radio">Student</el-radio>
          <el-radio value="Industry" size="large" class="radio">Industry</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Email" class="mt-2" prop="email">
        <el-input v-model="form.email" clearable placeholder="id@student.wintec.ac.nz" v-if="autoComplete === true"
          @blur="handleBlur" />
        <el-input v-model="form.email" clearable placeholder="mail@example.com" v-else />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" clearable placeholder="******" show-password />
      </el-form-item>

      <el-form-item label="Confim Password" prop="confirmedPassword">
        <el-input v-model="form.confirmedPassword" type="password" clearable placeholder="******" show-password />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin: 0 auto;" @click="handleRegistration(ruleFormRef)">Create
          Account</el-button>
      </el-form-item>

      <div style="text-align: center;">
        <el-text size="small">Already have an account? <RouterLink to="/login">Log in</RouterLink> </el-text>
      </div>

    </el-form>

  </div>


</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElLoading } from 'element-plus'
import type { FormProps, FormRules, FormInstance } from 'element-plus'
import type { AxiosInstance } from 'axios'
import { Message } from '@element-plus/icons-vue'


const axios: AxiosInstance = inject('$axios') as AxiosInstance
const router = useRouter()

interface RuleForm {
  email: string,
  password: string,
  confirmedPassword: string,
  role: string,
  currentTime: Date
}

const ruleFormRef = ref<FormInstance>()

const loading = ref(false)

const form = reactive<RuleForm>({
  email: '',
  password: '',
  confirmedPassword: '',
  role: 'Student',
  currentTime: new Date()
})

// Validate if two passwords inputed are correct
// const passwordValidation = (rule: any, value: any, callback: any) => {
//   if (value !== form.password) {
//     callback(new Error('Passwords do not match'))
//   } else {
//     callback()
//   }
// }

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

const confirmPasswordValidation = (rule: any, value: string, callback: any) => {
  if (value !== form.password) {
    callback(new Error('Passwords do not match.'))
  } else {
    callback()
  }
}

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
const autoComplete = ref(true)

const handleChange = () => {
  switch (form.role) {
    case "Student":
      autoComplete.value = true
      break
    case "Industry":
      autoComplete.value = false
      break
  }
}

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


const handleRegistration = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: form.email,
          password: form.password,
          role: form.role,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        console.log(res)
        if (res.data.code === 409) {
          // Password is in plain text, must be encrypt
          ElMessage.error(res.data.msg)
          loading.value = false
        }
        else if (res.data.code === 200) {
          ElMessage.success(res.data.msg)
          loading.value = false
          router.push('/login')
        }
        else {
          ElMessage.error(res.data.msg)
          loading.value = false
        }
      }).catch(error => {
        console.log("Error:")
        console.log(error)
        loading.value = false
      })
    }
    else {
      // When fail form validation
      console.log("ERROR:")
      console.log(fields)
      loading.value = false
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

.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
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