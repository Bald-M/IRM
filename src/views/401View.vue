<template>
  <div class="container">
    <div class="section">
      <div style="text-align: center;">
        <h1>401</h1>
        <h2>Unauthorized Response!</h2>
      </div>

      <div style="text-align: center;" class="mt-6">
        <RouterLink to="/">&#8592; Go to homepage</RouterLink>
      </div>

      <div style="display: flex; justify-content: center;">
        <img src="@/assets/Logo/Industry Internship System Logo_White.svg">
      </div>

    </div>
  </div>
</template>

<style scoped>
h1,
h2,
a {
  font-weight: bold;
}

h1 {
  color: rgb(215, 213, 228);
  font-size: 4rem;
}

h2 {
  color: rgb(162, 159, 181);
  font-size: 3rem;
}

.mt-3 {
  margin-top: 3rem;
}

.mt-6 {
  margin-top: 6rem !important;
}

a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}

.container {
  height: 100vh;
  background-image: url('@/assets/Mockup_App 404 Pag_without_Content.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.section {
  width: 1333px;
  margin: 0 auto;
}
</style>