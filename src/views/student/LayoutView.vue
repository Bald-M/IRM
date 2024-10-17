<template>
  <div class="container">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeaderComponent.vue'
import Footer from '@/components/SiteFooterComponent.vue'


</script>


<style scoped>
/* Container that wraps the content and ensures it takes full height */
.container {
  height: 100%;
  background: linear-gradient(to bottom, white 0%, #FFEDD7);
}
</style>