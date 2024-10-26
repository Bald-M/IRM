<template>
  <div class="container">

    <div class="select-section">

      <div>
        <el-select v-model="programme" placeholder="Programme" size="large" class="select">
          <el-option v-for="item in programmes" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

        <el-select v-model="specialisation" placeholder="Specialisation" size="large" class="select">
          <el-option v-for="item in specialisations" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

        <el-select v-model="status" placeholder="Internship Status" size="large" class="select">
          <el-option v-for="item in internshipStatus" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

      </div>

      <div>
        <el-input v-model="input" size="large" placeholder="Type something" :prefix-icon="Search" />
      </div>
    </div>

    <div class="table-section mt-2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="NAME" width="120" />
        <el-table-column prop="id" label="STUDENT ID" width="120" />
        <el-table-column prop="specialization" label="SPECIALIZATION" width="200" />
        <el-table-column prop="programme" label="PROGRAMME" width="140" />
        <el-table-column prop="email" label="EMAIL" width="220" />
        <el-table-column prop="number" label="PHONE NUMBER" width="200" />
        <el-table-column prop="status" label="STATUS" width="200" />
        <el-table-column fixed="right" label="OPERATIONS" min-width="250">
          <template #default>
            <el-button type="danger" size="large" :icon="Delete">
              Delete
            </el-button>
            <el-button type="primary" size="large" :icon="Edit">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-section">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" class="mt-3 mb-3" />
    </div>

  </div>

  <!-- Add the following features in the future -->
  <!-- Edit & Delete name/id/programme/email/phone/status-->
  <!-- Need to view student form -->
  <!-- Students: /students/details /students/form -->

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search, Edit, Delete } from '@element-plus/icons-vue'
import type { ComponentSize } from 'element-plus'


// Select
const programme = ref('')
const specialisation = ref('')
const status = ref('')

// Search
const input = ref('')

// Pagination
const currentPage = ref('')
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(true)
const disabled = ref(false)

// Should be watching all the time
// Once the value has been changed, sorting algorithum should be executed
const programmes = [
  {
    value: 'Bachelor',
    label: 'Bachelor',
  },
  {
    value: 'Postgraduate',
    label: 'Postgraduate',
  },
  {
    value: 'Master',
    label: 'Master',
  }
]

// Should be watching all the time
// Once the value has been changed, sorting algorithum should be executed
const specialisations = [
  {
    value: 'Software Engineering',
    label: 'Software Engineering',
  },
  {
    value: 'Networking Engineering',
    label: 'Networing Engineering',
  },
  {
    value: 'Database or Data Analytics',
    label: 'Database or Data Analytics',
  }
]

// Should be watching all the time
// Once the value has been changed, sorting algorithum should be executed
const internshipStatus = [
  {
    value: 'For Review',
    label: 'For Review'
  },
  {
    value: 'Avilable',
    label: 'Avilable'
  },
  {
    value: 'Placed',
    label: 'Placed'
  }
]

// GET Method
const tableData = [
  {
    name: 'Zihan Zhang',
    id: '18470661',
    specialization: 'Networking Engineering',
    programme: 'Postgraduate',
    email: 'zihzha36@student.wintec.ac.nz',
    number: '02902045309',
    status: 'Avilable',
  },
  {
    "name": "Jane Smith",
    "id": "18470663",
    "specialization": "Cybersecurity",
    "programme": "Postgraduate",
    "email": "jansmi33@student.wintec.ac.nz",
    "number": "02902045311",
    "status": "Avilable"
  },
  {
    "name": "Michael Johnson",
    "id": "18470664",
    "specialization": "Networking Engineering",
    "programme": "Diploma",
    "email": "micjoh36@student.wintec.ac.nz",
    "number": "02902045312",
    "status": "Avilable"
  },
  {
    "name": "Emily Davis",
    "id": "18470665",
    "specialization": "Information Systems",
    "programme": "Undergraduate",
    "email": "emidav38@student.wintec.ac.nz",
    "number": "02902045313",
    "status": "Avilable"
  },
  {
    "name": "David Brown",
    "id": "18470666",
    "specialization": "Software Engineering",
    "programme": "Postgraduate",
    "email": "davbro41@student.wintec.ac.nz",
    "number": "02902045314",
    "status": "Avilable"
  },
  {
    "name": "Sarah Wilson",
    "id": "18470667",
    "specialization": "Networking Engineering",
    "programme": "Certificate",
    "email": "sarwil52@student.wintec.ac.nz",
    "number": "02902045315",
    "status": "Avilable"
  },
  {
    "name": "Chris Martin",
    "id": "18470668",
    "specialization": "Cybersecurity",
    "programme": "Diploma",
    "email": "chrmar45@student.wintec.ac.nz",
    "number": "02902045316",
    "status": "Avilable"
  },
  {
    "name": "Jessica Lee",
    "id": "18470669",
    "specialization": "Information Systems",
    "programme": "Undergraduate",
    "email": "jeslee49@student.wintec.ac.nz",
    "number": "02902045317",
    "status": "For Review"
  },
  {
    "name": "Matthew Taylor",
    "id": "18470670",
    "specialization": "Networking Engineering",
    "programme": "Postgraduate",
    "email": "mattay50@student.wintec.ac.nz",
    "number": "02902045318",
    "status": "Placed"
  },
  {
    "name": "Laura Clark",
    "id": "18470671",
    "specialization": "Software Engineering",
    "programme": "Certificate",
    "email": "laucla53@student.wintec.ac.nz",
    "number": "02902045319",
    "status": "For Review"
  }
]


</script>

<style scoped>

.container {
  background-color: white;
  height: 100%;
}

.select-section {
  display: flex;
  justify-content: space-between;
}

.table-section {
  width: 100%;
}

.pagination-section {
  display: flex;
  justify-content: center;
}

.select {
  width: 240px;
  margin-right: 20px;
}

.mt-2 {
  margin-top: 2rem;
}

.mt-3 {
  margin-top: 3rem;
}

.mb-3 {
  margin-bottom: 3rem !important;
}
</style>