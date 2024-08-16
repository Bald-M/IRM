<template>
  <header>
    <div>
      <img src="@/assets/IIS & Wintec Logo.svg" class="logo" />
    </div>

    <nav>
      <el-link href="/" :underline="false">
        <el-icon class="el-icon--left">
          <Edit />
        </el-icon>
        Application
      </el-link>

      <el-link href="/" :underline="false">
        <el-icon class="el-icon--left">
          <ChatLineRound />
        </el-icon>
        Contact Us
      </el-link>

      <!-- Dynamic -->
      <!-- Display username if login -->
      <!-- Display sign in if not login -->
      <!-- Navigate to login view if not login -->
      <el-link href="/" :underline="false">
        <el-icon class="el-icon--left">
          <Avatar />
        </el-icon>
        Sign In
      </el-link>

    </nav>

  </header>

</template>

<script lang="ts" setup>
import { Edit, ChatLineRound, Avatar } from '@element-plus/icons-vue'

</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #333333;
  padding: 20px 30px;
}

nav {
  display: flex;
  align-items: center;
}

.el-link {
  color: white;
  margin: 0 20px;
  font-size: 20px;
}

.el-link:hover {
  color: #FB9333;
}

.el-icon--left {
  margin-right: 8px;
}

.logo {
  height: 80px;
}


</style>