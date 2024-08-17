<template>
  <div class="container">
    <Header />

    <Banner style="margin-top: 6rem;" :title="title" :content="content" :imgPath="backgroundImage" path="test" />

    <div class="benefit-container">

      <div>
        <el-text class="header">Why Join the IIS?</el-text>
      </div>


      <div class="box-section">
        <div class="box">

          <div class="box-image">
            <img src="@/assets/Background Image.svg" />
          </div>

          <div>
            <el-text>Benefit 1</el-text>
          </div>

          <div>
            <el-text>Content</el-text>
          </div>

        </div>

        <div class="box">

          <div class="box-image">
            <img src="@/assets/Background Image.svg" />
          </div>

          <div>
            <el-text>Benefit 1</el-text>
          </div>

          <div>
            <el-text>Content</el-text>
          </div>

        </div>


        <div class="box">

          <div class="box-image">
            <img src="@/assets/Background Image.svg" />
          </div>

          <div>
            <el-text>Benefit 1</el-text>
          </div>

          <div>
            <el-text>Content</el-text>
          </div>

        </div>



      </div>

    </div>


    <Footer style="margin-top: 5rem;" />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import backgroundImage from '@/assets/Background Image.svg'
import { ref } from 'vue'


const title = ref('Helping Students Acheive Their Future')
const content = ref('The Industry Internship System helps students through providing working experience and expertise.')

</script>

<style scoped>
.benefit-container {
  padding: 0 180px
}

.header {
  color: #FE7235;
  font-weight: bold;
  font-size: 45px;
}

.box-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}

.box {
  height: 400px;
  width: 400px;
  border-radius: 27px;
  background-color: rgba(250, 250, 250, 0.8);
}

.box-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #FE7235;
  border-radius: 180px;
}

.box-image>img {
  width: 20px;
  height: 20px;
}
</style>