<template>
  <div class="container">
    <!-- Render the child components inside RouterView -->
    <!-- Shared layout for registration, login, and forgot password views -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Container that wraps the content and ensures it takes full height */
.container {
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, #1E5192, #FFFFFF);
  align-items: center;
  justify-content: center;
}
</style>
