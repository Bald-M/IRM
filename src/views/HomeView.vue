<template>
  <div class="container">
    <Header />

    <Banner style="margin-top: 6rem;" :title="title" :content="content" :imgPath="backgroundImage" path="test" />

    


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