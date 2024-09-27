<template>
  <div class="container">

    <div class="header-section">

      <div class="header-text">
        <el-text>Alice Smith</el-text>
        <el-text>ID: 23456611</el-text>
        <div>
          <el-text>Avilable</el-text>
          <div class="available"></div>
        </div>
      </div>

      <div class="header-logo">
        <img src="@/assets/SocialIcon/cv_icon_orange.svg" />
        <img src="@/assets/SocialIcon/linkedin_icon_orange.svg" />
        <img src="@/assets/SocialIcon/github_icon_orange.svg" />
        <img src="@/assets/SocialIcon/portfolio_icon_orange.svg" />
      </div>

    </div>

    <div class="info-section">
      <el-row :gutter="20">

        <el-col :span="6">

          <div>

            <div>
              <el-text class="attribute" size="large">Student Email</el-text>
            </div>

            <div>
              <el-text class="value" size="large">alismx23@student.wintec.ac.nz</el-text>
            </div>

          </div>

        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Student Programme</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Bachelor of Applied IT</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">First Preference for Placement</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Internship</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Personal Email</el-text>
          </div>

          <div>
            <el-text class="value" size="large">alicesmith@gmail.com</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Area of Study</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Software Engineering</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Phone Number</el-text>
          </div>

          <div>
            <el-text class="value" size="large">02102894366</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Second Preference for Placement</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Industry Project</el-text>
          </div>
        </el-col>

        <el-col :span="6">
          <div>
            <el-text class="attribute" size="large">Average Grade</el-text>
          </div>

          <div>
            <el-text class="value" size="large">A grade</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Personal Statement</el-text>
          </div>

          <div>
            <el-text class="value" size="large">My passion lies at the intersection of software programming, web design, and business analysis. With a commitment to innovation and a hunger for continuous leaning, I'm excited to leverage my skills to make impact in the ever-evolving landscape of technology and business.</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Skills / Experience</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Cursus quisque venenatis placerat eget orci urna. Placerat dictum commodo quisque maecenas hac accumsan leo quis? Molestie felis ex ex, fermentum sapien turpis accumsan cras. Ante dui pretium felis etiam, amet varius tristique.</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Favourite Courses</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Cursus quisque venenatis placerat eget orci urna. Placerat dictum commodo quisque maecenas hac accumsan leo quis? Molestie felis ex ex, fermentum sapien turpis accumsan cras. Ante dui pretium felis etiam, amet varius tristique.</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Two Tutors for Reference</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Cursus quisque venenatis placerat eget orci urna. Placerat dictum commodo quisque maecenas hac accumsan leo quis? Molestie felis ex ex, fermentum sapien turpis accumsan cras. Ante dui pretium felis etiam, amet varius tristique.</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Preferred Companies</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Gallagher, Datacom, IT Partners, Blackout Games</el-text>
          </div>
        </el-col>

        <el-col :span="24">
          <div>
            <el-text class="attribute" size="large">Internship Options</el-text>
          </div>

          <div>
            <el-text class="value" size="large">Web development, Business Analysis, UX/UI design</el-text>
          </div>
        </el-col>

      </el-row>

    </div>

    <div class="footer-section">
      <img src="@/assets/SocialIcon/web_development_icon.svg">
      <img src="@/assets/SocialIcon/business_analysis_icon.svg">
      <img src="@/assets/SocialIcon/design_icon.svg">
    </div>

  </div>
</template>

<style scoped>
.mt-3 {
  margin-top: 3rem;
}

.container {
  height: 100%;
  width: 100%;
  border: #e3e3e3 2px solid;
  padding: 15px 30px;
}

.header-section {
  display: flex;
  justify-content: space-between;
}

.header-text>.el-text:first-child {
  font-size: 32px;
  font-weight: bold;
}

.header-text>.el-text:nth-child(2) {
  font-size: 16px;
  margin-left: 4rem;
  color: #3A3541;
}

.header-logo>img {
  margin: 0 15px;
  width: 40px;
  height: 40px;
}

.footer-section>img {
  margin: 10px 20px 0 0;
  width: 40px;
  height: 40px;
}

.attribute {
  color: #0D99FF;
  font-weight: bold;
}

.value {
  color: #3A3541;
}

.el-col {
  margin-top: 2rem;
}

.available, .unavailable, .review {
  width: 10px;
  height: 10px;
  content: '';
  border-radius: 180px;
  display: inline-block;
  margin: 0 10px;
}

.available {
  background-color: #09FF5C;
}

.unavailable {
  background-color: #FF0808;
}

.review {
  background-color: #FE6601;
}
</style>
