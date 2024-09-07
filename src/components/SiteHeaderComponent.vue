<template>
  <header>
    <div>
      <img src="@/assets/IIS and Wintec logo_blue.svg" class="logo" />
    </div>

    <nav>
      <RouterLink to="/">
        <el-icon class="el-icon--left">
          <Edit />
        </el-icon>
        <span>Application</span>
      </RouterLink>

      <RouterLink to="/">
        <el-icon class="el-icon--left">
          <ChatLineRound />
        </el-icon>
        <span>Contact Us</span>
      </RouterLink>

      <!-- Dynamic -->
      <!-- Display username if login -->
      <!-- Display sign in if not login -->
      <!-- Navigate to login view if not login -->
      <RouterLink to="/login">
        <el-icon class="el-icon--left">
          <Avatar />
        </el-icon>
        <span>Sign In</span>
      </RouterLink>

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
  padding: 20px 30px;
  border-top: #1E5192 15px solid;
}

nav {
  display: flex;
  align-items: center;
}

a {
  color: #1E5192;
  margin: 0 20px;
  font-size: 20px;
  text-decoration: none;
}

a:hover {
  color: #FB9333;
}

.el-icon--left {
  margin-right: 8px;
}

.logo {
  height: 80px;
}



/* Phone */
@media screen and (max-width: 768px) {
  span {
    font-size: 12px;
  }

  .logo {
    height: 40px;
    width: 40px;
  }
}

/* Tablet */
@media screen and (max-width: 992px) and (min-width: 768px) {
  span {
    font-size: 18px;
  }

  .logo {
    height: 80px;
  }
}

/* Computer */
@media screen and (min-width: 992px) {
  span {
    font-size: 20px;
  }

  .logo {
    height: 80px;
  }

}
</style>