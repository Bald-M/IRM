<template>
  <div class="container">

    <Header />

    <Banner :title="banner.title" :content="banner.content" :button="banner.button" :imgPath="banner.backgroundImg"
      :redirect="banner.redirect" class="mt-6 banner" />

    <div class="box-container mt-6">

      <div>
        <el-text class="header">Application Steps</el-text>
      </div>


      <div class="box-section">

        <div v-for="item in boxes" :key="item.id" class="box">
          <Box :title="item.title" :content="item.content" :imgPath="item.imgPath" />
        </div>

      </div>

    </div>

    <div class="form-container mt-6">

      <div>
        <el-text class="header">Complete Application Form</el-text>
      </div>

      <div class="form-section">

        <div class="step-section">

          <!-- :class="['circle', { active: index <= currentStep }]" -->
          <!-- :class="['label', { active: index <= currentStep }]" -->
          <div class="stepper">
            <div class="step" v-for="(item, index) in steps" :key="item.id">
              <div class="circle" :class="{ active: index === currentStep }">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="label">
                {{ item.label }}
              </div>
              <div v-if="index < steps.length - 1" class="line"></div>
            </div>

          </div>
        </div>

        <div>
          <!-- Form Logo -->
          <div class="form-logo-section">
            <img src="@/assets/ApplicationFormIcon/Personal Information Icon.svg" class="form-logo"
              v-if="currentPage === 1" />
            <img src="@/assets/ApplicationFormIcon/Academic & Career Information.svg" class="form-logo"
              v-if="currentPage === 2" />
            <img src="@/assets/ApplicationFormIcon/Internship Preferences Icon.svg" class="form-logo"
              v-if="currentPage === 3" />
            <img src="@/assets/ApplicationFormIcon/Internship References Icon.svg" class="form-logo"
              v-if="currentPage === 4" />
          </div>

          <div>
            <el-form class="form" :model="form" :rules="rules" ref="ruleFormRef" label-width="auto"
              :label-position="top" status-icon>

              <!-- First Page -->
              <div v-show="currentPage === 1">

                <el-form-item label="Full Name" prop="name">
                  <el-input v-model="form.name" clearable></el-input>
                </el-form-item>

                <el-form-item label="Student ID" prop="id">
                  <el-input v-model="form.id" clearable></el-input>
                </el-form-item>

                <el-form-item label="Student Email" prop="studentEmail">
                  <el-input v-model="form.studentEmail" clearable></el-input>
                </el-form-item>

                <el-form-item label="Personal Email" prop="personalEmail">
                  <el-input v-model="form.personalEmail" clearable></el-input>
                </el-form-item>

                <el-form-item label="Phone Number" prop="phoneNum">
                  <el-input v-model="form.phoneNum" clearable></el-input>
                </el-form-item>

              </div>

              <!-- Second Page -->
              <div v-show="currentPage === 2">

                <el-scrollbar height="400px" always>
                  <el-form-item label="Personal Statement" prop="personalStatement">
                    <el-text class="description" size="small">A short personal statement that can be published to our
                      website for
                      prospective employers to view. This states what you are interested in the IT sector. Industry see
                      this next to your name and link to your CV etc.</el-text>
                    <el-input type="textarea" v-model="form.personalStatement"></el-input>
                  </el-form-item>

                  <el-form-item label="CV/Resume" prop="cv">
                    <el-text class="description" size="small">Add the link to your online resume</el-text>
                    <el-input placeholder="Add the link to your online resume" v-model="form.cv"></el-input>
                  </el-form-item>

                  <el-form-item label="Linkedin" prop="linkedin">
                    <el-text class="description" size="small">Add the link to your LinkedIn profile</el-text>
                    <el-input placeholder="Add the link to your LinkedIn profile" v-model="form.linkedin"></el-input>
                  </el-form-item>

                  <el-form-item label="Portfolio" prop="portfolio">
                    <el-text class="description" size="small">Add the link to your online portfolio of
                      work</el-text>
                    <el-input placeholder="Add the link to your online portfolio of work"
                      v-model="form.portfolio"></el-input>
                  </el-form-item>

                  <el-form-item label="GitHub Profile" prop="github">
                    <el-text class="description" size="small">Add the link to your Github profile</el-text>
                    <el-input placeholder="Add the link to your Github profile" v-model="form.github"></el-input>
                  </el-form-item>

                  <el-form-item label="What is your average grade?" prop="grade">
                    <el-radio-group v-model="form.grade">
                      <el-radio v-for="item in grades" :key="item.id" :value="item.value" size="large" border>{{
                        item.label }}</el-radio>
                    </el-radio-group>

                  </el-form-item>

                  <!-- Degree - SE - Software Engineering
                  Degree - NE - Networking Engineering
                  Postgraduate Diploma - SE - Software Engineering
                  Postgraduate Diploma - NE - Network Engineering
                  Masters - SE - Software Engineering
                  Masters - NE - Network Engineering
                  Masters - Database or Data Analytics
                  Masters - BA or Project Management -->
                  <el-form-item label="What is your programme?" prop="programme">
                    <el-radio-group v-model="form.programme">
                      <el-radio v-for="item in programmes" :key="item.id" :value="item.value" size="large" border>{{
                        item.label }}</el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="What is your area of study?" prop="areaOfStudy">
                    <el-radio-group v-model="form.areaOfStudy">
                      <el-radio v-for="item in studies" :key="item.id" :value="item.value" size="large" border>{{
                        item.label }}</el-radio>
                    </el-radio-group>
                  </el-form-item>

                </el-scrollbar>

              </div>

              <!-- Third page -->
              <div v-show="currentPage === 3">

                <el-scrollbar height="400px" always>

                  <el-form-item label="What are your internship options?" prop="internshipOptions">
                    <el-checkbox-group v-model="form.internshipOptions">
                      <el-checkbox v-for="item in internshipOptions" :key="item.id" :value="item.value"
                        :label="item.label" size="large" border />
                    </el-checkbox-group>
                  </el-form-item>

                  <el-form-item label="Do you have company preferences?" prop="preferences">
                    <el-checkbox-group v-model="form.preferences">
                      <el-checkbox v-for="item in companies" :key="item.id" :value="item.value" :label="item.label"
                        size="large" border />
                    </el-checkbox-group>
                  </el-form-item>

                  <el-form-item label="Please indicate your first preference for a placement?" prop="firstPreference">
                    <el-radio-group v-model="form.firstPreference">
                      <el-radio v-for="item in preferences" :key="item.id" :value="item.value" size="large" border>{{
                        item.label }}</el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="Please indicate your second preference for a placement?" prop="secondPreference">
                    <el-radio-group v-model="form.secondPreference">
                      <el-radio v-for="item in preferences" :key="item.id" :value="item.value" size="large" border>{{
                        item.label }}</el-radio>
                    </el-radio-group>
                  </el-form-item>

                </el-scrollbar>

              </div>

              <!-- Last page -->
              <div v-show="currentPage === 4">
                <el-scrollbar height="400px" always>

                  <el-form-item label="What are your skills and experience?" prop="experience">
                    <!-- <el-text class="description" size="small">e.g. skills, computer languages, work experience in IT or
                      leadership & communication</el-text> -->
                    <el-input auto-size v-model="form.experience" type="textarea"></el-input>
                  </el-form-item>

                  <el-form-item label="What are your favourite courses from your studies?" prop="courses">
                    <el-input auto-size v-model="form.courses" type="textarea"></el-input>
                  </el-form-item>

                  <el-form-item label="Provide TWO tutors that I can get a reference from you?" prop="tutors">
                    <el-input auto-size v-model="form.tutors" type="textarea"></el-input>
                  </el-form-item>

                  <el-form-item label="Application agreement">
                    <el-row :gutter="0">
                      <el-col :span="2">
                        <el-checkbox v-model="term" />
                      </el-col>
                      <el-col :span="22" style="padding-top: 5px;">
                        <el-text>I understand and agree that Wintec partner internships and industry
                          projects are unpaid
                          voluntary work for a minimum of 300 hours made up of 2 days a week over the 16 weeks of
                          semester</el-text>
                      </el-col>
                    </el-row>
                  </el-form-item>

                  <el-form-item v-if="currentPage === 4">
                    <el-button v-if="term === true" type="primary" style="width: 200px; margin: 20px auto;"
                      @click="handleSubmit(ruleFormRef)">Submit</el-button>
                    <el-button v-else disabled type="primary"
                      style="width: 200px; margin: 20px auto;">Submit</el-button>
                  </el-form-item>
                </el-scrollbar>

              </div>

              <el-form-item>
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                  layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" class="pagination" />
              </el-form-item>

            </el-form>

          </div>

        </div>

      </div>

    </div>

    <Footer class="mt-6" />

  </div>

</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeaderComponent.vue'
import Footer from '@/components/SiteFooterComponent.vue'
import Banner from '@/components/BannerComponent.vue'
import Box from '@/components/SiteBoxComponent.vue'
import backgroundImg from '@/assets/Background Image2.jpg'
import fillOutApplication from '@/assets/fill_out_application_icon.svg'
import gatherInformation from '@/assets/gather_information_icon.svg'
import submitAndWait from '@/assets/submit_and_wait_icon.svg'
import type { FormProps, FormRules, FormInstance, CheckboxValueType } from 'element-plus'
import { ElMessage } from 'element-plus'
import { ref, reactive, inject, computed, onMounted } from 'vue'
import type { AxiosInstance } from 'axios'
import { useRouter } from 'vue-router'

// https://element-plus.org/zh-CN/component/select.html 自定义下拉菜单底部 add an option

const axios: AxiosInstance = inject('$axios') as AxiosInstance
const router = useRouter()

const banner = reactive({
  title: 'Internship Application',
  content: 'Submit your application to express interest in an internship through the Industry Internship System. Completing this form is mandatory for eligibility in the selection process. The IRM and partners use this information to choose candidates for interviews. Early submission increases your chances of securing an internship.',
  button: 'Apply Now',
  backgroundImg: backgroundImg,
  redirect: ''
})

const boxes = reactive([
  { id: 1, title: 'Step 1: Gather Your Information', content: 'Before beginning your application, make sure you have all necessary documents ready, including your CV, LinkedIn profile, and any other details.', imgPath: gatherInformation },
  { id: 2, title: 'Step 2: Fill Out the Application', content: 'Carefully complete each section of the form, providing accurate and detailed information to ensure your application is thoroughly reviewed.', imgPath: fillOutApplication },
  { id: 3, title: 'Step 3: Submit and Wait', content: 'After submitting your form, the Industry Relationship Manager (IRM) will review your application, and you\'ll be notified of the next steps.', imgPath: submitAndWait },
])

const currentStep = ref(0)

// Step
const steps = reactive([
  { id: 1, label: 'Personal Information' },
  { id: 2, label: 'Academic & Career Information' },
  { id: 3, label: 'Internship Preferences' },
  { id: 4, label: 'Internship References' },
])

// Form
const top = ref<FormProps['labelPosition']>('top')

const ruleFormRef = ref<FormInstance>()

interface RuleForm {
  name: string,
  id: string,
  personalEmail: string,
  studentEmail: string,
  phoneNum: string,
  personalStatement: string,
  cv: string,
  linkedin: string,
  github: string,
  portfolio: string,
  grade: string,
  programme: string,
  areaOfStudy: string,
  experience: string,
  courses: string,
  tutors: string,
  internshipOptions: CheckboxValueType[],
  preferences: CheckboxValueType[],
  firstPreference: string,
  secondPreference: string
}

const form = reactive<RuleForm>({
  name: '',
  id: '',
  personalEmail: '',
  studentEmail: '',
  phoneNum: '',
  personalStatement: '',
  cv: '',
  linkedin: '',
  portfolio: '',
  github: '',
  grade: '',
  programme: '',
  areaOfStudy: '',
  experience: '',
  courses: '',
  tutors: '',
  internshipOptions: [],
  preferences: [],
  firstPreference: '',
  secondPreference: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'This field is required', trigger: 'blur' },
  ],
  id: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  personalEmail: [
    { required: true, message: 'This field is requried', trigger: 'blur' },
    { type: 'email', message: 'Invalid email address', trigger: 'blur' }
  ],
  studentEmail: [
    { required: true, message: 'This field is requried', trigger: 'blur' },
    { type: 'email', message: 'Invalid email address', trigger: 'blur' }
  ],
  phoneNum: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  personalStatement: [
    { required: true, message: 'This field is requried', trigger: 'blur' },
  ],
  cv: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  portfolio: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  github: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  linkedin: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  programme: [
    { required: true, message: 'This field is requried', trigger: 'change' }
  ],
  areaOfStudy: [
    { required: true, message: 'This field is requried', trigger: 'change' }
  ],
  grade: [
    { required: true, message: 'This field is requried', trigger: 'change' }
  ],
  experience: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  courses: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  tutors: [
    { required: true, message: 'This field is requried', trigger: 'blur' }
  ],
  internshipOptions: [
    { required: true, type: 'array', message: 'This field is requried', trigger: 'change' }
  ],
  preferences: [
    { required: true, type: 'array', message: 'This field is requried', trigger: 'change' }
  ],
  firstPreference: [
    { required: true, message: 'This field is requried', trigger: 'change' }
  ],
  secondPreference: [
    { required: true, message: 'This field is requried', trigger: 'change' }
  ]
})

const formPostedFmt = computed(() => ({
  name: form.name,
  wintec_id: form.id,
  personal_email: form.personalEmail,
  student_email: form.studentEmail,
  phone_number: form.phoneNum,
  personal_statement: form.personalStatement,
  cv_link: form.cv,
  linkedin_link: form.linkedin,
  portfolio_link: form.portfolio,
  github_link: form.github,
  average_grade: form.grade,
  programme_of_study: form.programme,
  area_of_study: form.areaOfStudy,
  internship_options: form.internshipOptions,
  preferred_companies: form.preferences,
  first_preference: form.firstPreference,
  second_preference: form.secondPreference,
  skills: form.experience,
  favourite_courses: form.courses,
  references: form.tutors
}))

// Select Options

const internshipOptions = ref([
  {
    id: 1,
    value: 'API Development',
    label: 'API Development'
  },
  {
    id: 2,
    value: 'Business Analysis',
    label: 'Business Analysis'
  },
  {
    id: 3,
    value: 'Data Analysis',
    label: 'Data Analysis'
  },
  {
    id: 4,
    value: 'Database',
    label: 'Database'
  },
  {
    id: 5,
    value: 'Game Development',
    label: 'Game Development'
  },
  {
    id: 6,
    value: 'Mobile App Development',
    label: 'Mobile App Development'
  },
  {
    id: 7,
    value: 'Networking',
    label: 'Networking'
  },
  {
    id: 8,
    value: 'Project Management',
    label: 'Project Management'
  },
  {
    id: 9,
    value: 'Security',
    label: 'Security'
  },
  {
    id: 10,
    value: 'Software Testing',
    label: 'Software Testing'
  },
  {
    id: 11,
    value: 'System support - help desk',
    label: 'System support - help desk'
  },
  {
    id: 12,
    value: 'UX/UI design',
    label: 'UX/UI design'
  },
  {
    id: 13,
    value: 'Web Development',
    label: 'Web Development'
  },
  {
    id: 14,
    value: 'Other',
    label: 'Other'
  },
])

const companies = ref([
  {
    id: 1,
    value: 'Blackout Games',
    label: 'Blackout Games'
  },
  {
    id: 2,
    value: 'CTEK',
    label: 'CTEK'
  },
  {
    id: 3,
    value: 'Datacom',
    label: 'Datacom'
  },
  {
    id: 4,
    value: 'Enlighten Design',
    label: 'Enlighten Design'
  },
  {
    id: 5,
    value: 'Game Development',
    label: 'Game Development'
  },
  {
    id: 6,
    value: 'Mobile App Development',
    label: 'Mobile App Development'
  },
  {
    id: 7,
    value: 'Networking',
    label: 'Networking'
  },
  {
    id: 8,
    value: 'Project Management',
    label: 'Project Management'
  },
  {
    id: 9,
    value: 'Security',
    label: 'Security'
  },
  {
    id: 10,
    value: 'Software Testing',
    label: 'Software Testing'
  },
  {
    id: 11,
    value: 'System support - help desk',
    label: 'System support - help desk'
  },
  {
    id: 12,
    value: 'UX/UI design',
    label: 'UX/UI design'
  },
  {
    id: 13,
    value: 'Web Development',
    label: 'Web Development'
  },
  {
    id: 14,
    value: 'Other',
    label: 'Other'
  },
])

const preferences = ref([
  {
    id: 1,
    value: 'Internship',
    label: 'Internship'
  },
  {
    id: 2,
    value: 'Industry',
    label: 'Industry'
  },
  {
    id: 3,
    value: 'Internal client internship/project',
    label: 'Internal client internship/project'
  },
  {
    id: 4,
    value: 'Classroom project',
    label: 'Classroom project'
  },
  {
    id: 5,
    value: 'Design Factory',
    label: 'Design Factory'
  },
  {
    id: 6,
    value: 'GIG - Intenal client based projects',
    label: 'GIG - Intenal client based projects'
  },
])

const grades = ref([
  {
    id: 1,
    value: 'A grade',
    label: 'A grade'
  },
  {
    id: 2,
    value: 'B grade',
    label: 'B grade'
  },
  {
    id: 3,
    value: 'C grade',
    label: 'C grade'
  }
])

const programmes = ref([
  {
    id: 1,
    value: 'Bachelor of Applied IT',
    label: 'Bachelor of Applied IT'
  },
  {
    id: 2,
    value: 'Postgraduate Diploma in IT',
    label: 'Postgraduate Diploma in IT'
  },
  {
    id: 3,
    value: 'Master of Applied IT',
    label: 'Master of Applied IT'
  }
])

const studies = ref([
  {
    id: 1,
    value: 'Networking Engineering',
    label: 'Networking Engineering'
  },
  {
    id: 2,
    value: 'Software Engineering',
    label: 'Software Engineering'
  },
  {
    id: 3,
    value: 'Database or Data Analytics',
    label: 'Database or Data Analytics'
  },
  {
    id: 4,
    value: 'Business Analytics',
    label: 'Business Analytics'
  },
  {
    id: 5,
    value: 'Project Management',
    label: 'Project Management'
  },
])

const term = ref(false)

// Pagination
const currentPage = ref(1)
const pageSize = ref(5)
const total = ref(20)

// As the page updating, step also update
const handleCurrentChange = () => {
  currentStep.value = currentPage.value - 1
}

// Submit Form
interface PageFields {
  [key: string]: string[];
}

const pageFields: PageFields = {
  1: ['name', 'id', 'studentEmail', 'personalEmail', 'phoneNum'],
  2: ['personalStatement', 'cv', 'linkedin', 'portfolio', 'github', 'grade', 'programme', 'areaOfStudy'],
  3: ['internshipOptions', 'preferences', 'firstPreference', 'secondPreference'],
  4: ['experience', 'courses', 'tutors'],
}

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios({
        url: '/api/completeApplication',
        method: 'post',
        data: formPostedFmt.value,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + localStorage.getItem('authKey'),
        }
      }).then(res => {
        // console.log(res)
        ElMessage.success('Application saved')
        router.push('/student/profile')
      }).catch(error => {
        console.log(error)
        // 先检查 error.response 是否存在，防止未定义错误
        if (error.response && error.response.data) {
          // 提示用户错误信息
          ElMessage.error(error.response.data.error)
        } else {
          // 如果 error.response 不存在，提示网络问题或服务器未响应
          ElMessage.error('Network error or server not responding. Please try again later.')
        }
      })
    } else {
      console.log(fields)
      if (fields) {
        for (let page in pageFields) {
          const fieldList = pageFields[page]
          const hasError = fieldList.some(field => fields[field])
          if (hasError) {
            currentPage.value = parseInt(page)
            break
          }
        }
      }
    }
  })
}

onMounted(() => {
  axios({
    url: '/api/userProfileData',
    method: 'post',
    data: {
      user_id: localStorage.getItem('app_uid')
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('authKey')
    }
  }).then(res => {
    if (res.data && res.data.student) {
      console.log(res.data)
      const student = res.data.student
      form.name = student.name
      form.id = student.wintec_id
      form.personalEmail = student.personal_email
      form.studentEmail = student.student_email
      form.phoneNum = student.phone_number
      form.personalStatement = student.personal_statement
      form.cv = student.cv_link
      form.linkedin = student.linkedin_link
      form.portfolio = student.portfolio_link
      form.github = student.github_link
      form.programme = student.programme_of_study
      form.areaOfStudy = student.area_of_study
      form.experience = student.skills
      form.tutors = student.reference
      form.grade = student.average_grade
      form.courses = student.favourite_courses
      form.firstPreference = student.first_preference
      form.secondPreference = student.second_preference
      form.internshipOptions = JSON.parse(student.internship_options)
      form.preferences = JSON.parse(student.preferred_companies)
    } else {
      console.log('Response Error')
    }
  }).catch(err => {
    if (err.response) {
      console.error('Server Error:', err.response.status, err.response.data);
    } else if (err.request) {
      console.error('Network Error:', err.request);
    } else {
      console.error('Request Error:', err.message);
    }
  })
})

</script>

<style scoped>
.mt-3 {
  margin-top: 3rem !important;
}

.mt-4 {
  margin-top: 4rem !important;
}

.mt-5 {
  margin-top: 5rem !important;
}

.mt-6 {
  margin-top: 6rem !important;
}

.form-logo {
  width: 200px;
  height: 150px;
}

.container {
  width: 100%;
}

.header {
  color: #FE7235;
  font-weight: bold;
  font-size: 45px;
}

.pagination {
  width: 100%;
  justify-content: end;
}

.banner,
.box-container,
.form-container {
  width: 1333px;
  margin: 0 auto;
}

.box-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}


.form-section {
  background-color: white;
  height: 900px;
  border-radius: 32px;
}

.step-section {
  background-color: #FE6601;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
}

/* Stepper Start */
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff6600;
  /* Background color similar to the one in the image */
  padding: 20px;
  border-radius: 10px;
}

.step {
  display: flex;
  align-items: center;
}

.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* Text color inside the circle */
  font-weight: bold;
}

.active {
  background-color: white;
  color: #ff6600;
}

.label {
  margin-left: 10px;
  color: white;
  font-weight: bold;
}

.label.active {
  color: white;
  /* Active label color */
}

.line {
  width: 50px;
  height: 2px;
  background-color: white;
  margin: 0 10px;
}

/* Stepper End */

.form-logo-section {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.form {
  width: 50%;
  margin: 0 auto;
}

.description {
  color: #FE6601;
}

.el-checkbox,
.el-radio {
  width: 250px;
}

.el-radio,
.el-checkbox {
  margin: 5px 10px;
}

.el-form-item {
  width: 630px;
}
</style>
