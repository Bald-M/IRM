<template>

  <div class="container">

    <el-container>

      <el-aside>
        <Nav />
      </el-aside>

      <el-container>
        <el-header>
          <Header title="INDUSTRY INTERNSHIP SYSTEM CLIENT PANEL" />
        </el-header>

        <el-main>
          <RouterView />
        </el-main>

      </el-container>

    </el-container>

  </div>

</template>


<script lang="ts" setup>
import Nav from '@/components/LeftNavComponent.vue'
import Header from '@/components/PanelHeaderComponent.vue'

</script>

<style scoped>
.el-aside {
  width: 240px
}

.el-header, .el-main {
  padding: 0;
}

.el-header {
  height: 100px;
}


</style>