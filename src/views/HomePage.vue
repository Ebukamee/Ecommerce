<script>
  import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturdService from '../components/FeaturedService.vue'
import FooterBar from '../components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    FeaturdService,
    FooterBar
  },
  mounted() {
  }
}
</script>

<template>
    <NavBar />
    <HeroSection />
    <FeaturdService />
    <FooterBar />

  </template>
  