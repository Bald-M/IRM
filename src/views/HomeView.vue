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
            <img src="@/assets/icon_facebook.svg" />
          </div>

          <div>
            <el-text class="title">Benefit 1</el-text>
          </div>

          <div>
            <el-text class="content">Content</el-text>
          </div>

        </div>

        <div class="box">

          <div class="box-image">
            <img src="@/assets/icon_facebook.svg" />
          </div>

          <div>
            <el-text class="title">Benefit 1</el-text>
          </div>

          <div>
            <el-text class="content">Content</el-text>
          </div>

        </div>


        <div class="box">

          <div class="box-image">
            <img src="@/assets/icon_facebook.svg" />
          </div>

          <div>
            <el-text class="title">Benefit 1</el-text>
          </div>

          <div>
            <el-text class="content">Content</el-text>
          </div>

        </div>

      </div>

    </div>

    <div class="instruction-container" style="margin-top: 5rem;">

      <div>
        <el-text class="header">How does the IIS works?</el-text>
      </div>

      <div class="instruction-section mt-3">
        
        <div class="instruction-box">
          <div class="instruction-box-image">
            
          </div>

          <div class="instruction-box-content">
            <div>
              <el-text class="title">Step 1: Fill out this Form</el-text>
            </div>

            <div>
              <el-text class="explanation-content">Explanation is here</el-text>
            </div>

            <div class="mt-2">
              <el-input disabled placeholder="Full Name"></el-input>
            </div>

            <div class="mt-1">
              <el-input disabled placeholder="Email Address"></el-input>
            </div>

            <div class="mt-1">
              <el-button type="primary">More Information</el-button>
            </div>

          </div>

        </div>

      </div>

      <div class="instruction-section mt-3">
        
        <div class="instruction-box">
          <div class="instruction-box-image">
            
          </div>

          <div class="instruction-box-content">
            <div>
              <el-text class="title">Attend interview with IRM</el-text>
            </div>

            <div>
              <el-text class="explanation-content">Explanation is here</el-text>
            </div>

            <div class="mt-2">
              <div class="info-section">

                <div class="info-image">
                  
                </div>

                <div class="info-content">
                  <el-text>Students have to submit their forms at first before booking.</el-text>
                </div>

              </div>
            </div>

            <div class="mt-1">
              <el-button type="primary">Book Interview</el-button>
            </div>

          </div>

        </div>


      </div>


      <div class="instruction-section mt-3">
        
        <div class="instruction-box">
          <div class="instruction-box-image">
            
          </div>

          <div class="instruction-box-content">
            <div>
              <el-text class="title">Attend interview with client</el-text>
            </div>

            <div>
              <el-text class="explanation-content">Explanation is here</el-text>
            </div>

            <div class="mt-2">

              <div class="client-info-section">
                <div class="client-title">Sub-title</div>
                <div class="client-link">
                  <a href="https://www.google.com">Learn More</a>
                </div>
              </div>

              <div class="client-info-section mt-1">
                <div class="client-title">Sub-title</div>
                <div class="client-link">
                  <a href="https://www.google.com">Learn More</a>
                </div>
              </div>

              <div class="client-info-section mt-1">
                <div class="client-title">Sub-title</div>
                <div class="client-link">
                  <a href="https://www.google.com">Learn More</a>
                </div>
              </div>


            </div>


          </div>

        </div>


      </div>

    </div>


    <Footer style="margin-top: 5rem;" />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import Banner from '@/components/BannerComponent.vue'
import backgroundImage from '@/assets/Background Image.jpg'
import { ref } from 'vue'


const title = ref('Helping Students Acheive Their Future')
const content = ref('The Industry Internship System helps students through providing working experience and expertise.')

</script>

<style scoped>

.mt-3 {
  margin-top: 3rem;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.mt-6 {
  margin-top: 60px;
}

.container {
  width: 100%;
}

.benefit-container {
  /* padding: 0 180px */
  width: 1333px;
  margin: 0 auto;
}

.instruction-container {
  width: 1333px;
  margin: 0 auto;
}


.instruction-box {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 27px;
  display: flex;
  align-items: stretch;
}

.instruction-box-image {
  flex: 1;
  background-color: #FB9333;
  border-radius: 27px 0 0 27px;
}

.instruction-box-content  {
  flex: 2;
  padding: 30px 60px;
}

.info-section {
  width: 90%;
  border-radius: 7px;
  display: flex;
}

.info-image {
  width: 10%;
  border-radius: 7px 0 0 7px;
  background-color: #FB9333;
}

.info-content {
  width: 90%;
  border-radius: 0 7px 7px 0;
  background-color: #ECECEC;
  padding: 5px 18px;
}

.info-content > .el-text {
  font-weight: bold;
  color: #FE7235;
  font-size: 16px;
}

.el-input {
  width: 90%;
}

.el-button {
  width: 90%;
}

.instruction-section {

}

.client-info-section {
  display: flex;
  justify-content: space-between;
  border: #BBBBBB 1px solid;
  border-radius: 7px;
}

.client-title, .client-link {
  text-align: center;
  padding: 10px;
}

a {
  color: #FE7235;
  text-decoration: none;
  font-weight: bold;
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
  background-color: white;
  padding: 50px 30px;
}

.box-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #FE7235;
  border-radius: 180px;
}

.box-image>img {
  width: 40px;
  height: 40px;
}

.title {
  color: #FE7235;
  font-weight: bold;
  font-size: 50px;
}

.content {
  color: #6B6B6B;
  font-size: 30px;
}

.explanation-content {
  color: #9C9C9C;
  font-size: 15px;
}


</style>