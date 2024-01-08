<script>
  import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      Products: this.$store.state.Products
    };
  },
  computed : {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
     this.$store.dispatch('getProducts')
    setTimeout(() => {
      if(this.user && !this.user.emailVerified) {
      this.$router.push('/verifyemail')
      
    }
    }, 1000);
  },
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
    <div v-for="(Product,i) in Products" :key="i">
                <div class="contain">
                    <img :src="Product.Url">
                    <div class="desc">
                        <h5>{{ Product.Name }}</h5>
                        <div class="flex">
                          <div class="star">
                            <i class="bx bxs-star star" ></i>
                            <i class="bx bxs-star star"></i>
                            <i class="bx bxs-star star"></i>
                            <i class="bx bxs-star star"></i>
                            <i class="bx bxs-star star"></i>
                        </div>
                        <h4>₦{{ Product.Price }}</h4>
                        </div>
                    </div>
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
   .contain {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
    box-sizing: border-box;
   }
   .contain img {
    width: 70%;
    border-radius: 20px;
    max-width: 90%;
    max-height: 100%;
    display: block;
    margin: auto;
   }
   .contain h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 20px;
    text-align: center;
   }
   .contain h4 {
    display: block;
    color: var(--green);
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
   }
   .contain desc {
    text-align: start;
    padding: 10px 0;
   }
   .star {
    font-size: 12px;
    color: rgb(241, 181, 25);
   }
   .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
   }
</style>
  