<script>
// import { documentId } from 'firebase/firestore';
import LoaDer from "@/components/LoaDer.vue";
import NavBar from "../components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
const content = 12;
export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
    LoaDer
},
  data() {
    return {
      Products: this.$store.state.Products,
      currentSlide: 1,
      loading:true,
      adminId: this.$store.state.adminId,
      deleting: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    paginate() {
      const startPagination = (this.currentSlide - 1) * content;
      const endPagination = startPagination + content;
      return this.Products.slice(startPagination, endPagination);
    },
    totalSlides() {
      return Math.ceil(this.Products.length / content);
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    if(!this.Products) {
        this.loading = true
    }
    if (this.Products) {
   setTimeout(() => {
    this.loading = false
   }, 1000);
}
    setTimeout(() => {
      if (this.user && !this.user.emailVerified) {
        this.$router.push("/verifyemail");
      } else if (!this.user) {
        this.$router.push("/login");
      }
    }, 1000);
  },
  methods : {
    deleteProduct(Id) {
      this.deleting =true
      this.$store.dispatch('deleteProducts',{Id : Id})
      setTimeout(() => {
        window.location.reload()
        this.deleting = false
      }, 3000);
    }
  },
};
</script>

<template>
  <LoaDer v-if="loading" />
  <template v-else>
    <NavBar />
  <div class="hero">
    <div class="container">
      <h2>Shop Now</h2>
      <p>Save more when you shop with us</p>
    </div>
  </div>
  <section>
    <div v-for="(Product, i) in paginate" :key="i" class="contain">
      <div @click="$router.push(`/shop/${Product.id}`)">
        <img :src="Product.Url" />
        <div class="desc">
          <h5>{{ Product.Name }}</h5>
          <div class="flex">
            <div class="star">
              <i class="bx bxs-star star"></i>
              <i class="bx bxs-star star"></i>
              <i class="bx bxs-star star"></i>
              <i class="bx bxs-star star"></i>
              <i class="bx bxs-star star"></i>
            </div>
            <h4>₦{{ Product.Price }}</h4>
          </div>
        </div>
      </div>
      <div class="button" v-if="user.uid == adminId">
          <button @click="deleteProduct(Product.id)">Delete</button>
        </div>
    </div>
  </section>
  <p class="blaq">{{ currentSlide }} of {{ totalSlides }} Pages</p>
  <div class="paginate">
    <button :disabled="currentSlide == 1" @click="currentSlide -= 1">
      Previous
    </button>
    <button :disabled="currentSlide == totalSlides" @click="currentSlide += 1">
      Next
    </button>
  </div>
  <h3 v-if="deleting">Deleting...</h3>
  <FooterBar />
  </template>
</template>

<style scoped>
.button {
  display: block;
  text-align: center;
}
button {
  color: white;
       padding: 5px;
       text-align: center;
       border-radius: 5px;
        background-color:  rgb(206, 28, 28);
        border: 1px solid   rgb(206, 28, 28);
}
.hero {
  background-image: url("../assets/backG.jpg");
  background-repeat: no-repeat;
  padding: 150px 0;
  /* height: 400px; */
  text-align: center;
}
h2,
p {
  color: white;
}
h2 {
  font-size: 46px;
  font-family: Spartan, sans-serif;
}
.contain {
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  min-height: 400px;
  max-height: 450px;
  border: 1px solid #cce7d0;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 20px 20px 30px #cce7d0;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;
  box-sizing: border-box;
}
.contain img {
  width: 90%;
  /* border-radius: 20px; */
  max-width: 90%;
  height: 100%;
  max-height: 200px;
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
section {
  margin: auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.paginate button {
  padding: 2.5px 10px;
  border-radius: 2px;
  background-color: var(--green);
  color: white;
  border: 1px solid var(--green);
  font-family: "League Spartan", sans-serif;
}
.paginate {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 30px 20%;
}
.contain desc {
  text-align: start;
  padding: 10px 0;
}
.blaq {
  text-align: center;
  color: black;
}
.star {
  font-size: 12px;
  color: rgb(241, 181, 25);
}
h3 {
  text-align: center;
}
@media (max-width: 1000px) {
  .hero {
    background-image: url("../assets/backG (2).jpg");
  }
  .contain {
    margin: 15px auto;
  }
}
</style>
