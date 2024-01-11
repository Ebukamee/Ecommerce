<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import LoaDer from '@/components/LoaDer.vue';

export default {
    components : {
    NavBar,
    FooterBar,
    LoaDer
},
    data() {
        return {
            Product: this.$store.state.Product,
            Name: '',
            Price: 0,
            Quantity:1,
            Url:'',
            loading:true
        }
    },
    mounted() {
        const {id} = this.$route.params;
        this.$store.dispatch('getById',
        {documentId : id} )
        if(!this.Product) {
        this.loading = true
    }
        if (this.Product) {
   setTimeout(() => {
    this.loading = false
   }, 1000);
}
      setTimeout(() => {
        const [{Name, Price,Url}] = this.Product
       this.Name = Name,
       this.Price= Price,
       this.Url = Url
      }, 5000);
    },
    methods: {
        addTocart() {
            this.$store.dispatch('AddTocart',{
                Name:this.Name,
                Price:this.Price,
                Quantity: this.Quantity,
                Url: this.Url
            })
            alert(`${this.Name} has been added to cart`)
        }
    },
    computed : {
        user() {
      return this.$store.state.user
    },
    }
}
</script>

<template>
    <LoaDer v-if="loading"/>
    <template v-else>
        <NavBar />
      <div v-for="(Pro,i) in Product" :key="i">
        <section id="prodetails" class="section-p1">
            <div class="single-pro-image">
                <img :src="Pro.Url"> 
            </div>
            <div class="single-pro-details">
                <h4>{{ Pro.Name }}</h4>
                <h2>₦{{ Pro.Price }}</h2>
                <input type="number" v-model="Quantity">
                <button class="normal
                " @click="addTocart">Add To Cart</button>
                <h4>Product Details</h4>
                <span>{{ Pro.Description }}</span>
            </div>
        </section>
      </div>
      <FooterBar />
    </template>
</template>

<style scoped>
   section {
    display: flex;
    margin-top: 60px;
    padding: 40px;
   }
   #prodetails .single-pro-image {
    width: 50%;
    margin-right: 50px;
    outline: black solid;
    height: fit-content;
}
img {
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 100%;
}
 .single-pro-details {
    width: 50%;
    padding: 30px;
}
h4 {
    font-size: 20px;
    color: #222;
}
h2 {
    font-size: 26px;
}
input {
    width: 50px;
    height: 47px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px 
}
button {
    background-color: var(--green);
    border: 1px solid var(--green);
    border-radius: 2px;
    padding: 5px;
    color: white;
}
</style>