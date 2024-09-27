<template>
  <header>
    <div>
      <img src="@/assets/Logo/IIS and Wintec logo_blue.svg" class="logo" />
    </div>

    <div class="nav">

      <div class="nav-links">

        <!-- Dynamic -->
        <!-- If Logg in -->
        <div class="link-item" v-if="isLoggedIn" @click="handleRouter('/student/application')">
          <div class="link active">
            <img src="@/assets/HeaderIcon/application_icon_blue.svg" class="icon" />
            <span>Application</span>
          </div>
        </div>

        <div class="link-item" v-else>
          <div class="link">
            <img src="@/assets/HeaderIcon/application_icon_blue.svg" class="icon" />
            <span>Application</span>
          </div>
        </div>

        <div class="link-item">
          <div class="link">
            <img src="@/assets/HeaderIcon/contact_us_icon_blue.svg" class="icon" />
            <span>Contact Us</span>
          </div>
        </div>

        <!-- Dynamic -->
        <!-- Display username if login -->
        <!-- Display sign in if not login -->
        <!-- Navigate to login view if not login -->
        <!-- If item is selected, active it and img should change to white -->
        <div class="link-item" v-if="isLoggedIn" @mouseover="showMenu" @mouseout="hideMenu" >
          <div class="link">
            <img src="@/assets/HeaderIcon/sign_in_icon_blue.svg" class="icon" />
            <span>{{ username }}</span>
          </div>
          <div class="sub-menu" v-show="showSubMenu">
            <div @click="logOut">
              <el-text>Application</el-text>
            </div>
            <div @click="logOut">
              <el-text>Profile</el-text>
            </div>
            <div @click="logOut">
              <el-text>Contact Us</el-text>
            </div>
            <div @click="logOut">
              <el-text>Log Out</el-text>
            </div>
          </div>
        </div>

        <div class="link-item active" @click="handleRouter('/login')" v-else>
          <div class="link">
            <img src="@/assets/HeaderIcon/sign_in_icon_white.svg" class="icon" />
            <span>Sign In</span>
          </div>
        </div>
      </div>

    </div>

  </header>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.authKey)
const username = computed(() => authStore.name)
const logOut = authStore.clearAuthData
const showSubMenu = ref(false)

const handleRouter = (path: string) => {
  router.push(path)
}

const hideMenu = () => {
  showSubMenu.value = false
}

const showMenu = () => {
  showSubMenu.value = true
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

/* .el-text {
  margin-left: 15px;
} */

.logo {
  height: 80px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.link-item {
  position: relative;
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

.link-item>span:hover {
  color: #7092bd;
}

.link {
  display: flex;
  align-items: center;
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

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  width: 100px;
  border: rgba(0, 0, 0, 0.12) 1px solid;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
}

.sub-menu>div {
  padding-left: 15px;
}

.sub-menu>div:hover {
  color: rgb(79, 166, 255);
  background-color: rgb(236, 245, 253);
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