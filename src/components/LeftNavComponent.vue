<template>
  <div class="container">

    <!-- Dynamic -->
    <div class="avater-container">
      <img src="@/assets/logo.svg" />
    </div>

    <!-- Dynamic -->
    <div class="greeting-container">
      <el-text class="greeting">Kia ora,</el-text>
      <br />
      <el-text class="name">Sue Pearson</el-text>
    </div>

    <!-- Navigation -->
    <div class="mt-3">

      <div class="dashboard-text">
        <el-text>Dashboards</el-text>
      </div>

      <nav>

        <div class="nav-item" :class="{ active : selected === 1 }" :index="1" @click="handleRouter">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <a>Students</a>
        </div>

        <div class="nav-item" :class="{ active : selected === 2 }" :index="2" @click="handleRouter">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <a>Candidates</a>
        </div>

        <div class="nav-item" :class="{ active : selected === 3 }" :index="3" @click="handleRouter">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <a>Change Password</a>
        </div>

        <div class="nav-item" :class="{ active : selected === 4 }" :index="4" @click="handleRouter">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <a>Log Out</a>
        </div>

      </nav>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'

const selected = ref()

const router: Router = useRouter() as Router

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

.container {
  height: 100vh;
  width: 100%;
  background-color: #FB9333;
}

.avater-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.avater-container > img {
  width: 80px;
}

.greeting-container, .dashboard-text {
  padding: 0 14px;
}

.name, a {
  color: white
}

.greeting, .dashboard-text > .el-text {
  font-size: 20px;
  color: rgb(253,190,133);
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

.nav-item:hover, .active {
  background-color: rgb(238,140,48);
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



</style>