<template>

  <div class="container">

    <!-- Wintec Logo -->
    <div style="display: flex; justify-content: center;">
      <img src="@/assets/Industry Internship System Logo.svg" class="industry-internship-system-logo" />
    </div>

    <slot></slot>

  </div>

</template>

<style scoped>
a {
  text-decoration: none;
  color: #FB9333;
}

button {
  width: 100%;
}

.el-radio-group {
  width: 100%;
}

.el-radio {
  display: flex;
  justify-content: center;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.mt-3 {
  margin-top: 3rem;
}

/* .container {
  height: 100%;
  display: flex;
  background: linear-gradient(to top, #FEA734, #FE3434);
  align-items: center;
  justify-content: center;
} */

/* Phone */
@media screen and (max-width: 768px) {
  .container {
    width: 280px;
    height: 460px;
    border-radius: 24px;
    padding: 1rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 120px;
  }

  .radio {
    flex: 0 0 43%;
    border-radius: 9px;
    background-color: white;
  }
}

/* Tablet */
@media screen and (max-width: 992px) and (min-width: 768px) {
  .container {
    width: 480px;
    height: 600px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
  }


  .industry-internship-system-logo {
    height: 150px;
  }

  .radio {
    flex: 0 0 45%;
    border-radius: 9px;
    background-color: white;
  }
}

/* Computer */
@media screen and (min-width: 992px) {
  .container {
    width: 480px;
    height: 600px;
    border-radius: 24px;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
    margin: 0 auto;
  }

  .industry-internship-system-logo {
    height: 150px;
  }

  .radio {
    flex: 0 0 45%;
    border-radius: 9px;
    background-color: white;
  }
}
</style>