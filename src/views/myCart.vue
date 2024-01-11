
<template>
    <LoaDer v-if="loading"/>
    <template v-else>
        <NavBar />
    <div class="about-header">
            <h2>Cart</h2>
        </div>
    <section id="cart" class="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Images</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody v-for="(Item,i) in Items" :key="i"> 
                <tr>
                    <td><i class="bx bx-x-circle"></i></td>
                    <td><img :src="Item.Url"></td>
                    <td>{{ Item.Name }}</td>
                    <td>₦{{ Item.Price }}</td>
                    <td>{{ Item.Quantity }}</td>
                    <td>₦{{ Item.Quantity * Item.Price}}</td>
                </tr>
            </tbody>
        </table>
    </section>
    <FooterBar />
    </template>
</template>
<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue';
import LoaDer from '@/components/LoaDer.vue';
export default {
    components : {
    NavBar,
    FooterBar,
    LoaDer
},
data() {
    return {
        Items: this.$store.state.Cart,
        Quantity: 1,
        total : null,
        loading:true
    };
},
computed: {
    user() {
        return this.$store.state.user
    }
},
mounted() {
    setTimeout(() => {
        if(this.user && !this.user.emailVerified) {
      this.$router.push('/verifyemail')     
    }
    else if (!this.user) {
      this.$router.push('/login')
    }
    else {
        this.$store.dispatch('getCart', {
            Id: this.user.uid
        })
    if(!this.Items) {
        this.loading = true
    }
   if (this.Items) {
   setTimeout(() => {
    this.loading = false
   }, 1500);
   }
    }
    }, 1000);
  },
}

</script>

<style>
  #cart {
    overflow-x: auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    white-space: nowrap;
}
table thead {
    border: 1px solid #e2e9e1;
    border-left: none;
    border-right: none;
    height: 50px;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
td {
    width: 150px;
    text-align: center;
}
.about-header {
    background-image: url("../assets/cart.jpg");
    height: 20vh;
    background-size: cover;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-position: center bottom;
    padding: 40px;
}
#cart table img {
    width: 70px;
}
</style>