<template>
  <div class="container">
    <div class="mt-3">
      <div style="display: flex; justify-content: center;">
        <h1>404</h1>
      </div>

      <div style="display: flex; justify-content: center;">
        <h2>Page not found!</h2>
      </div>

      <div style="display: flex; justify-content: center;" class="mt-6">
        <RouterLink to="/">&#8592; Go to homepage</RouterLink>
      </div>

      <div>
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
  margin-top: 6rem;
}

a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}

.container {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/Mockup_App 404 Pag_without_Content.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>