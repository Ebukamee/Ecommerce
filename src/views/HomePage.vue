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
  computed : {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    setTimeout(() => {
      if(this.user && !this.user.emailVerified) {
      this.$router.push('/verifyemail')
    }
    }, 1000);
  }
}
</script>

<template>
    <NavBar />
    <HeroSection />
    <FeaturdService />
    <FooterBar />
  </template>
  