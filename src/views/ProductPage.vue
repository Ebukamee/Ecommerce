<script>
  import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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
    <div class="hero">
        <div class="container">
            <h2>Shop Now</h2>
            <p>Save more when you shop with us</p>
        </div>
    </div>
    <!-- <img src="../assets/backG.jpg" alt="" srcset=""> -->
  </template>

  <style scoped>
   .hero {
    background-image: url('../assets/backG.jpg');
    padding:150px 0;
    height: 400px;
    text-align: center;
   }
   h2, p {
    color: white;
   }
</style>
  