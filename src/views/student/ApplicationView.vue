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
            <img src="@/assets/personal_information_questions_icon.svg" class="form-logo" />
          </div>

          <div>
            <el-form class="form" :model="form" :rules="rules" ref="ruleFormRef" label-width="auto"
              :label-position="top" status-icon>

              <!-- First Page -->
              <template v-if="currentPage === 1">

                <el-form-item label="Full Name" prop="name">
                  <el-input v-model="form.name" clearable />
                </el-form-item>

                <el-form-item label="Student ID" prop="id">
                  <el-input v-model="form.id" clearable />
                </el-form-item>

                <el-form-item label="Student Email" prop="personalEmail">
                  <el-input v-model="form.studentEmail" clearable />
                </el-form-item>

                <el-form-item label="Personal Email" prop="studentEmail">
                  <el-input v-model="form.personalEmail" clearable />
                </el-form-item>

                <el-form-item label="Phone Number" prop="phoneNum">
                  <el-input v-model="form.phoneNum" clearable />
                </el-form-item>

              </template>

              <!-- Second Page -->
              <template v-if="currentPage === 2">
                <el-form-item label="Personal Statement">
                  <el-text class="description" size="small">A short personal statement that can be published to our
                    website for
                    prospective employers to view. This states what you are interested in the IT sector. Industry see
                    this next to your name and link to your CV etc.</el-text>
                  <el-input type="textarea"></el-input>
                </el-form-item>

                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="CV/Resume">
                      <el-text class="description" size="small">Add the link to your online resume</el-text>
                      <el-input></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Linkedin">
                      <el-text class="description" size="small">Add the link to your LinkedIn profile</el-text>
                      <el-input></el-input>
                    </el-form-item>
                  </el-col>

                </el-row>

                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Portfolio">
                      <el-text class="description" size="small">Add the link to your online of work</el-text>
                      <el-input></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="GitHub Profile">
                      <el-text class="description" size="small">Add the link to your Github profile</el-text>
                      <el-input></el-input>
                    </el-form-item>
                  </el-col>

                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="What is your average grade?">
                      <el-radio-group v-model="radioTest1" class="second-page-radio-group">
                        <el-radio value="A" size="small" border>A grade</el-radio>
                        <el-radio value="B" size="small" border>B grade</el-radio>
                        <el-radio value="C" size="small" border>C grade</el-radio>
                      </el-radio-group>

                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="What is your programme?">
                      <el-radio-group v-model="radioTest1" class="second-page-radio-group">
                        <el-radio value="A" size="small" border>Bachelor of Applied IT</el-radio>
                        <el-radio value="B" size="small" border>Postgraduate Diploma in IT</el-radio>
                        <el-radio value="C" size="small" border>Master of Applied IT</el-radio>
                      </el-radio-group>
                    </el-form-item>

                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="What is your area of study?">
                      <el-radio-group v-model="radioTest1" class="second-page-radio-group">
                        <el-radio value="A" size="small" border>Network Engineering</el-radio>
                        <el-radio value="B" size="small" border>Software Engineering</el-radio>
                        <el-radio value="C" size="small" border>Database or Data Analytics</el-radio>
                        <!-- <el-radio value="D" size="small" border>Project Management</el-radio> -->
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>


              </template>

              <!-- Last page -->
              <template v-if="currentPage === 3">

                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="What are your internship options?">
                      <el-text class="description" size="small">Please select the type of internship you would
                        like</el-text>
                      <el-checkbox v-model="checkboxTest1" label="API Development" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Business Analysis" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Data Analysis" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Database" border size="large" />
                      <el-checkbox v-model="checkboxTest1" label="Game Development" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Mobile App Development" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Networking" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Project Management" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Security" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Software Testing" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="System support - help desk" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="UX/UI design" size="large" border />
                      <el-checkbox v-model="checkboxTest1" label="Web Development" size="large" border />
                      <!-- If choose other, a new input field should be appeared -->
                      <el-checkbox v-model="checkboxTest1" label="Other" size="large" border />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">

                      <el-form-item label="What are your internship options?">
                        <el-text class="description" size="small">Please select the type of internship you would
                          like</el-text>
                        <el-checkbox v-model="checkboxTest1" label="Blackout Games" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="CTEK" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Datacom" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Englighten Design" border size="large" />
                        <el-checkbox v-model="checkboxTest1" label="Game Development" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Mobile App Development" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Networking" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Project Management" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Security" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Software Testing" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="System support - help desk" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="UX/UI design" size="large" border />
                        <el-checkbox v-model="checkboxTest1" label="Web Development" size="large" border />
                        <!-- If choose other, a new input field should be appeared -->
                        <el-checkbox v-model="checkboxTest1" label="Other" size="large" border />
                      </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Please indicate your first preference for a placement?">
                      <el-radio-group v-model="radioTest1" class="third-page-radio-group">
                        <el-radio value="A" size="large" border>Internship</el-radio>
                        <el-radio value="B" size="large" border>Industry Project</el-radio>
                        <el-radio value="C" size="large" border>Internal Client Internship/Project</el-radio>
                        <el-radio value="C" size="large" border>Internal Client Internship/Project</el-radio>
                        <el-radio value="C" size="large" border>Classroom Project</el-radio>
                        <el-radio value="C" size="large" border>Design Factory</el-radio>
                        <el-radio value="C" size="large" border>GIG - Internal Client Based Projects</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Please indicate your second preference for a placement?">
                      <el-radio-group v-model="radioTest1" class="third-page-radio-group">
                        <el-radio value="A" size="large" border>Internship</el-radio>
                        <el-radio value="B" size="large" border>Industry Project</el-radio>
                        <el-radio value="C" size="large" border>Internal Client Internship/Project</el-radio>
                        <el-radio value="C" size="large" border>Internal Client Internship/Project</el-radio>
                        <el-radio value="C" size="large" border>Classroom Project</el-radio>
                        <el-radio value="C" size="large" border>Design Factory</el-radio>
                        <el-radio value="C" size="large" border>GIG - Internal Client Based Projects</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>


                </el-row>

                <el-form-item>
                  <!-- @click="handleSubmit(ruleFormRef)" -->
                  <el-button type="primary" style="width: 200px; margin: 20px auto;">Submit</el-button>
                </el-form-item>

              </template>

              <el-form-item>
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                  layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" class="pagination" />
              </el-form-item>

            </el-form>

          </div>



        </div>

      </div>

    </div>

    <!-- <div class="mt-6">xx</div>
    <div class="mt-6">xx</div> -->


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
import type { FormProps, FormRules, FormInstance } from 'element-plus'
import { ref, reactive } from 'vue'

const radioTest1 = ref()
const checkboxTest1 = ref()

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
  { id: 3, label: 'Internship Preferences & References' },
])

// Form
const top = ref<FormProps['labelPosition']>('top')

const ruleFormRef = ref<FormInstance>()

interface RuleForm {
  name: string,
  id: string,
  personalEmail: string,
  studentEmail: string,
  phoneNum: string
}

const form = reactive<RuleForm>({
  name: '',
  id: '',
  personalEmail: '',
  studentEmail: '',
  phoneNum: ''
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
})

// Pagination
const currentPage = ref(1)
const pageSize = ref(5)
const total = ref(15)

// As the page updating, step also update
const handleCurrentChange = () => {
  currentStep.value = currentPage.value - 1
}


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
  height: 1500px;
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

.second-page-radio-group > .el-radio {
  width: 200px;
}

.third-page-radio-group > .el-radio {
  width: 300px;
}

.el-checkbox {
  width: 300px;
}

.el-radio,
.el-checkbox {
  margin: 5px 0;
}
</style>
