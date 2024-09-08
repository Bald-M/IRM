<template>
  <header>
    <div>
      <img src="@/assets/Logo/IIS and Wintec logo_blue.svg" class="logo" />
    </div>

    <div class="nav">

      <div class="nav-links">

        <div class="link-item">
          <img src="@/assets/HeaderIcon/application_icon_blue.svg" class="icon" />
          <span>Application</span>
        </div>

        <div class="link-item">
          <img src="@/assets/HeaderIcon/contact_us_icon_blue.svg" class="icon" />
          <span>Contact Us</span>
        </div>

      <!-- Dynamic -->
      <!-- Display username if login -->
      <!-- Display sign in if not login -->
      <!-- Navigate to login view if not login -->
      <!-- If item is selected, active it and img should change to white -->
        <div class="link-item active" @click="handleRouter('/login')">
          <img src="@/assets/HeaderIcon/sign_in_icon_white.svg" class="icon" />
          <span>Sign In</span>
        </div>
      </div>

    </div>

  </header>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRouter = (path: string) => {
  router.push(path)
}

</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-top: #1E5192 15px solid;
}

.nav {
  display: flex;
}

.el-text {
  margin-left: 15px;
}

.logo {
  height: 80px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.link-item {
  display: flex;
  align-items: center;
  color: #0052A5;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.link-item .icon {
  margin-right: 8px; 
  width: 24px;
  height: 24px;
}

.link-item:hover {
  cursor: pointer;
}

.link-item > span:hover {
  color: #7092bd;
}

.active {
  display: flex;
  align-items: center;
  background-color: #ff6600; 
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.active .icon {
  margin-right: 8px;
  width: 24px;
  height: 24px;
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