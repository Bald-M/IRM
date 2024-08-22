<template>
  <div class="container">

    <Header />

    <div class="tool">
      
      <el-badge is-dot>
        <el-button :icon="Bell"></el-button>
      </el-badge>

      <el-badge>
        <el-button :icon="User"></el-button>
      </el-badge>

      <!-- Drawer -->
    </div>

    <el-form :model="form" label-width="auto" class="form" :label-position="top">

      <!-- Declaration -->
      <el-form-item>
        <el-space wrap direction="vertical">
          <el-text size="large">
            I understand and agree that Wintec partner internships and industry projects are unpaid voluntary work for a minimum of 300 hours made up of 2 days a week over the 16 weeks of semester.
          </el-text>

          <el-radio-group v-model="form.declaration">
            <el-radio :value="'Yes'" @change="toggleDisabledRadios(false)">Yes</el-radio>
            <el-radio :value="'No'" @change="toggleDisabledRadios(true)">No</el-radio>
          </el-radio-group>
        </el-space>

      </el-form-item>

      <!-- Average Grade -->
      <el-form-item>
        <el-space direction="vertical">
          <el-text size="large">
            What is your average grade (your estimate if ok)?
          </el-text>

          <el-radio-group v-model="form.averageGrade">
            <el-radio :value="'C'" :disabled="disable">C grade</el-radio>
            <el-radio :value="'B'" :disabled="disable">B grade</el-radio>
            <el-radio :value="'A'" :disabled="disable">A grade</el-radio>
          </el-radio-group>
        </el-space>
      </el-form-item>


      <!-- Programme of study -->
      <el-form-item>
        <el-space direction="vertical">
          <el-text size="large">
            What is your Programme of study
          </el-text>

          <el-radio-group v-model="form.programmeOfStudy">
            <el-radio :value="'Bachelor of Applied Information Technology'" :disabled="disable">Bachelor of Applied Information Technology</el-radio>
            <el-radio :value="'Postgraduate Diploma in Applied Information Technology'" :disabled="disable">Postgraduate Diploma in Applied Information Technology</el-radio>
            <el-radio :value="'Masters'" :disabled="disable">Masters</el-radio>
          </el-radio-group>
        </el-space>
      </el-form-item>

      <!-- Area of study -->
      <el-form-item>
        <el-space direction="vertical">
          <el-text size="large">
            What is your Area of study
          </el-text>

          <el-radio-group v-model="form.areaOfStudy" @change="hideOtherInput">
            <el-radio :value="'Network Engineering'" :disabled="disable">Network Engineering</el-radio>
            <el-radio :value="'Software Engineering'" :disabled="disable">Software Engineering</el-radio>
            <el-radio :value="'Others'" :disabled="disable">Others</el-radio>
          </el-radio-group>

          <el-input v-model="otherArea" clearable v-show="displayInput"></el-input>
        </el-space>
      </el-form-item>

      <!-- Qualification Type -->
      <el-form-item>
        <el-space direction="vertical">
          <el-text size="large">
            Qualification Type (if other please be specific, eg Postgraduate BA)
          </el-text>

          <el-radio-group v-model="form.qualificationType">
            <el-radio :value="'Degree - SE - Software Engineering'" :disabled="disable">Degree - SE - Software Engineering</el-radio>
            <el-radio :value="'Degree - NE - Networking Engineering'" :disabled="disable">Degree - NE - Networking Engineering</el-radio>
            <el-radio :value="'Postgraduate Diploma - SE - Software Engineering'" :disabled="disable">Postgraduate Diploma - SE - Software Engineering</el-radio>
            <el-radio :value="'Postgraduate Diploma - NE - Network Engineering'" :disabled="disable">Postgraduate Diploma - NE - Network Engineering</el-radio>
            <el-radio :value="'Masters - SE - Software Engineering'" :disabled="disable">Masters - SE - Software Engineering</el-radio>
            <el-radio :value="'Masters - NE - Network Engineering'" :disabled="disable">Masters - NE - Network Engineering</el-radio>
            <el-radio :value="'Masters - Database or Data Analytics'" :disabled="disable">Masters - Database or Data Analytics</el-radio>
            <el-radio :value="'Masters - BA or Project Management'" :disabled="disable">Masters - BA or Project Management</el-radio>
          </el-radio-group>

          <el-input v-model="otherArea" clearable v-show="displayInput"></el-input>
        </el-space>
      </el-form-item>

      <el-form-item>
        
        <el-button type="primary">Submit</el-button>

        <el-button type="primary" @click="handleEditButton(editButtonText)">{{ editButtonText }}</el-button>

        <el-button type="primary" @click="signOut">Sign Out</el-button>

      </el-form-item>


    </el-form>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormProps } from 'element-plus'
import { Bell, User } from '@element-plus/icons-vue'
import Header from '@/components/SiteHeaderComponent.vue'

const form = reactive({
  declaration: 'Yes',
  averageGrade: '',
  areaOfStudy: '',
  programmeOfStudy: '',
  qualificationType: ''
})

const top = ref<FormProps['labelPosition']>('top')
const disable = ref(false)

const otherArea = ref()

const toggleDisabledRadios = (disabled: boolean) => {
  switch (disabled) {
    case true:
      disable.value = true
      break
    case false:
      disable.value = false
      break
  }
}

// Edit / Lock
const editButtonText = ref('Lock')

const handleEditButton = (value: string) => {
  switch (value) {
    case 'Edit':
      editButtonText.value = 'Lock'
      disable.value = false
      break
    case 'Lock':
      editButtonText.value = 'Edit'
      disable.value = true
      break
  }
}

const displayInput = ref(false)
const hideOtherInput = (value: string) => {
  if (value === 'Others') {
    displayInput.value = true
  } else {
    displayInput.value = false
  }
}

const signOut = () => {
  localStorage.removeItem('authToken')
  location.reload()
}

</script>

<style scoped>

/* Override */
.el-space {
  width: 100%;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tool {
  width: 100%;
  display: flex;
  justify-content: end;
}

</style>
