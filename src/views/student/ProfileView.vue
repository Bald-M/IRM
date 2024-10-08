<template>
  <div class="container">
    <Header />

    <div class="mt-6 profile-container">
      <div class="profile-header">
        <div>
          <el-text class="header">Student Profile</el-text>
        </div>

        <div class="profile-bar">
          <el-text class="profile-bar-text">To edit your profile, go to&nbsp;</el-text>
          <el-text class="profile-bar-text" style="text-decoration: underline; cursor: pointer;" @click="handleNavigation('/student/application')">Application&nbsp;</el-text>
          <el-text class="profile-bar-text">and edit your application form.</el-text>
        </div>
      </div>

      <Profile class="profile mt-3" />

    </div>

    <Footer class="mt-6"/>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeaderComponent.vue'
import Footer from '@/components/SiteFooterComponent.vue'
import Profile from '@/components/StudentDetailComponent.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleNavigation = (url: string) => {
  router.push(url)
}
</script>

<style scoped>

.mt-3 {
  margin-top: 3rem !important;
}

.mt-6 {
  margin-top: 6rem !important;
}

.container {
  width: 100%;
}

.profile-container {
  width: 1200px;
  height: 1100px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
}

.profile-bar {
  border: #FE6601 1px solid;
  background-color: #FE6601;
  border-radius: 12px;
  display: flex;
  margin-left: 3rem;;
  padding: 0 2rem;
}

.profile-bar-text {
  color: white;
  font-weight: bold;
}

.profile {
  height: 90%;
  background-color: white;
  border-radius: 24px;
  border: 2px #FE6601 solid;
}

.header {
  font-size: 32px;
  font-weight: bold;
  color: #FE6601;
}

</style>