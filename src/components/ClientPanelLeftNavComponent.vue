<template>
  <div class="container">

    <!-- Dynamic -->
    <div class="avater-container">
      <img src="@/assets/rob.png" />
    </div>

    <!-- Dynamic -->
    <div class="greeting-container">
      <el-text class="greeting">Kia ora,</el-text>
      <br />
      <el-text class="name">Rob Johnson</el-text>
    </div>

    <!-- Navigation -->
    <div class="mt-3">

      <div class="dashboard-text">
        <el-text>Dashboards</el-text>
      </div>

      <nav>

        <div class="nav-item" :class="{ active: selected === 2 }" :index="2" @click="handleRouter">
          <img src="@/assets/LeftNavIcon/candidates.png" class="icon" />
          <a>Candidates</a>
        </div>

        <!-- Setting /Change Password /Log Out -->
        <div class="nav-item" :class="{ active: selected === 3 }" :index="3" @click="handleRouter">
          <img src="@/assets/LeftNavIcon/lock.png" class="icon" />
          <a>Change Password</a>
        </div>

        <div class="nav-item" :class="{ active: selected === 4 }" :index="4" @click="handleRouter">
          <img src="@/assets/LeftNavIcon/logout.png" class="icon" />
          <a>Log Out</a>
        </div>

      </nav>

    </div>

    <div class="logo-section mt-6">
      <img src="@/assets/Logo/Industry Internship System Logo_White.svg">
    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'


const selected = ref(0)

const router: Router = useRouter() as Router
const route: RouteLocationNormalizedLoaded = useRoute()


// Watch for route changes and update the selected value accordingly
watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes('studentsList')) {
      selected.value = 1
    } else if (newPath.includes('candidatesList')) {
      selected.value = 2
    } else if (newPath.includes('changePassword')) {
      selected.value = 3
    } else if (newPath.includes('logOut')) {
      selected.value = 4
    } else {
      selected.value = 0 // Default case
    }
  },
  { immediate: true } // Run immediately on component mount
)


const handleRouter = (event: any) => {

  const targetElement = event.currentTarget as HTMLElement
  const indexValue = targetElement.getAttribute('index')

  selected.value = Number(indexValue)

  switch (selected.value) {
    case 1:
      router.push('/admin/panel/studentsList')
      break
    case 2:
      break
    case 3:
      break
    case 4:
      break
  }
}


</script>


<style scoped>
.mt-3 {
  margin-top: 3rem;
}

.mt-6 {
  margin-top: 6rem;
}

.container {
  height: 100%;
  width: 100%;
  background-color: #FE6601;
}

.avater-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.avater-container>img {
  width: 100px;
}

.greeting-container,
.dashboard-text {
  padding: 0 14px;
}

.name,
a {
  color: white
}

.greeting,
.dashboard-text>.el-text {
  font-size: 20px;
  color: rgb(253, 190, 133);
}

.name {
  font-size: 24px;
  font-weight: 500;
}

nav {
  padding: 0 8px;
}

.nav-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.nav-item:hover,
.active {
  background-color: rgb(241, 97, 1);
  border-radius: 8px;
}

a {
  text-decoration: none;
  font-weight: 500;
}

.icon {
  margin-right: 4px;
  width: 18px;
  height: 18px;
}

.logo-section {
  display: flex;
  justify-content: center;
  align-items: end;
}

.logo-section > img {
  width: 220px;
}


</style>