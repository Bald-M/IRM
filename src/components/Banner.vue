<template>

  <div class="container">

    <div class="section">

      <div class="text-section">
        <div>
          <!-- <el-text>Helping Students Acheive Their Future</el-text> -->
          <el-text>{{ title }}</el-text>
        </div>

        <div>
          <!-- <el-text>The Industry Internship System helps students through providing working experience and expertise.</el-text> -->
          <el-text line-clamp="3">{{ content }}</el-text>
        </div>

        <div>
          <el-button type="primary" @click="handleLinkButton(path)">Get Involved</el-button>
        </div>

      </div>

      <div class="image-section">
        <img :src="imgPath" />
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>

defineProps<{
  title: string,
  content: string,
  path: string,
  imgPath: string
}>()

const handleLinkButton = (path: string) => {
  alert(path)
}

</script>

<style scoped>
.container {
  width: 100%;
}

.section {
  display: flex;
  justify-content: space-between;
  padding: 0 180px;
}

.text-section {
  max-width: 60%;
  display: block;
}

/* .image-section {
  padding-top: 30px;
} */

.image-section>img {
  width: 690px;
  height: 400px;
}

.text-section > div:first-child, .text-section > div:nth-child(2), .text-section > div:last-child {
  max-width: 485px;
}

.text-section > div:first-child > .el-text {
  color: #FE7235;
  font-weight: bold;
  font-size: 45px;
}


.text-section > div:nth-child(2) > .el-text {
  color: #777777;
  font-size: 30px;
}

.text-section > div:last-child {
  margin-top: 20px;
}

.el-button {
  width: 100%;
  height: 40px;
}



</style>