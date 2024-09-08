<template>
  <div class="container">

    <div class="button-section">
      <el-button type="primary">Invite For Interview</el-button>
      <el-button>Internship Status ></el-button>
    </div>

    <StudentBox class="mt-3" />

  </div>

</template>

<script lang="ts" setup>
import StudentBox from '@/components/StudentComponent.vue'

defineProps<{
  id: string
}>()

</script>

<style scoped>

.mt-3 {
  margin-top: 3rem;
}

.container {
  
}

.button-section {
  display: flex;
  justify-content: end;
}


</style>