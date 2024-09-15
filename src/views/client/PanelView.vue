<template>
  <div class="grid-container">
    <aside class="nav">
      <Nav />
    </aside>
    <header class="header">
      <Header title="INDUSTRY INTERNSHIP SYSTEM ADMINISTRATION" />
    </header>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/ClientPanelLeftNavComponent.vue'
import Header from '@/components/PanelHeaderComponent.vue'

</script>

<style scoped>
.mt-2 {
  margin-top: 2rem;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "nav header"
    "nav main";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

.nav {
  grid-area: nav;
  background-color: #FE6601;
  width: 240px;
}

.header {
  grid-area: header;
  background-color: #FFF;
  height: 100px;
}

.main {
  grid-area: main;
  overflow-y: auto;
  background-color: white;
  padding: 30px 25px;
}
</style>