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
        <el-table-column fixed prop="date" label="NAME" width="120" />
        <el-table-column prop="name" label="STUDENT ID" width="120" />
        <el-table-column prop="state" label="SPECIALIZATION" width="120" />
        <el-table-column prop="city" label="PROGRAMME" width="120" />
        <el-table-column prop="address" label="EMAIL" width="120" />
        <el-table-column prop="zip" label="PHONE NUMBER" width="120" />
        <el-table-column prop="zip" label="STATUS" width="120" />
        <el-table-column fixed="right" label="OPERATIONS" min-width="120">
          <template #default>
            <el-button link type="primary" size="large">
              DELETE
            </el-button>
            <el-button link type="primary" size="large">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-section mt-3">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" />
    </div>

  </div>

  <!-- Add the following features in the future -->
  <!-- Edit & Delete name/id/programme/email/phone/status-->
  <!-- Need to view student form -->
  <!-- Students: /students/details /students/form -->

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
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

const internshipStatus = [
  {
    value: 'Available',
    label: 'Available'
  },
  {
    value: 'Ready for IRM Interview',
    label: 'Ready for IRM Interview'
  },
  {
    value: 'IRM Interview Scheduled',
    label: 'IRM Interview Scheduled'
  }
]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]


</script>

<style scoped>
.select-section {
  display: flex;
  justify-content: space-between;
}

.pagination-section {
  display: flex;
  justify-content: center;
}

.container {
  background-color: white;
  height: 100%;
  padding: 30px 25px;
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
</style>