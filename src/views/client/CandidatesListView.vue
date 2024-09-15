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

    <div class="card-section mt-3">
      <el-row :gutter="20">

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

        <el-col :xl="6" :lg="8">
          <StudentCard />
        </el-col>

      </el-row>

    </div>

    <div class="pagination-section mt-3">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" />
    </div>


  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StudentCard from '@/components/StudentCardComponent.vue'
import { Search } from '@element-plus/icons-vue'
import type { ComponentSize } from 'element-plus'



// Select
const programme = ref('')
const specialisation = ref('')
const status = ref('')

// Search
const input = ref('')

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

// Pagination
const currentPage = ref('')
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(true)
const disabled = ref(false)


</script>

<style scoped>

.mt-3 {
  margin-top: 3rem;
}

.el-col {
  margin-top: 2rem;
}

.container {
  background-color: white;
  height: 100%;
}

.select-section {
  display: flex;
  justify-content: space-between;
}

.pagination-section {
  display: flex;
  justify-content: center;
}

.select {
  width: 240px;
  margin-right: 20px;
}




</style>
