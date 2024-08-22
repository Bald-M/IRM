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

        <div class="nav-item">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <router-link to="/">Students</router-link>
        </div>

        <div class="nav-item">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <router-link to="/">Candidates</router-link>
        </div>

        <div class="nav-item">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <router-link to="/">Change Password</router-link>
        </div>

        <div class="nav-item">
          <img src="@/assets/icon_facebook.svg" class="icon" />
          <router-link to="/">Log Out</router-link>
        </div>

      </nav>

    </div>

  </div>

</template>


<style scoped>

.mt-3 {
  margin-top: 3rem;
}

.container {
  height: 100vh;
  width: 20%;
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

.nav-item:hover {
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

/* Override */
/* .el-menu {
  width: 300px;
  padding: 0 20px;
} */

/* Override */



</style>