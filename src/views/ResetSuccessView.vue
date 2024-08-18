<template>
  <div class="container">

    <div class="box">
      <!-- Wintec Logo -->
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
      </div>

      <div class="mt-2 text-section">
        <el-text>Password reset successfully</el-text>
      </div>

      <div class="mt-1">
        <el-button type="primary">Login</el-button>
      </div>

      <!-- Success Image -->
      <div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
  align-items: center;
  justify-content: center;
}

.el-button {
  width: 100%;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

/* Computer */
@media screen and (min-width: 992px) {
  .box {
    width: 480px;
    height: 520px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }

  .industry-internship-system-logo {
    height: 150px;
  }

  .text-section {
    display: flex; 
    justify-content: center;
  }

  .text-section > .el-text {
    font-weight: bold;
    font-size: 1rem;
    color: #111928;
  }
}

</style>