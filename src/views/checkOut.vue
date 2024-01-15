<template>
  <LoaDer v-if="loading" />
 <template v-else>
  <h2>Checkout</h2>
  <form @submit.prevent="makePayment">
    <input type="text" name="full_name" placeholder="Enter First Name" v-model="First" required>
    <input type="text" name="full_name" placeholder="Enter Last Name" v-model="Last" required>
    <input type="tel" name="phone" placeholder="Enter valid phone number" v-model="Phone" required>
            <input type="email" name="email" id="email" v-model="email" placeholder="Enter valid email" required>
            <p>Note: You can only pay ₦500,000 at a time</p>
            <button type="submit">Pay ₦{{ amount }}</button>
        </form>
 </template>
</template>
 
<script>
import LoaDer from '@/components/LoaDer.vue'
export default {
  data() {
    return {
      amount: 0,
      loading: true,
      First:'',
      Last:'',
      Phone:null,
      email:"",
      Items: this.$store.state.Cart,
    }
  },
  components: {
    LoaDer
  },
  methods: {
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: this.email,
          phonenumber: this.Phone,
          name: `${this.First} ${this.Last}`
        },
        callback: function(data) {
          // specified callback function
          console.log(data)
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
        }
      })
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    // this.$store.state.total = null
    setTimeout(() => {
      if (this.user && !this.user.emailVerified) {
        this.$router.push("/verifyemail");
      } else if (!this.user) {
        this.$router.push("/login");
      } else {
        this.$store.dispatch("getCart", {
          Id: this.user.uid,
        });
        if (!this.Items) {
          this.loading = true;
        }
        if (this.Items) {
          setTimeout(() => {
            this.loading = false;
            const arraySubtotals = this.Items.map((item) => ({
              totalPrice: item.Price * item.Quantity,
            }));

            const Total = arraySubtotals.reduce(
              (total, item) => total + item.totalPrice,
              0
            );
            this.amount = Total;
          }, 3000);
        }
      }
    }, 1000);
  },
}
</script>
 
<style>
h2 {
  color: var(--brown);
  text-align: center;
  font-family: League Spartan, 'sans-serif';
}
  input {
    display: block;
    padding: 2.5px 10px;
    width: 80%;
    border: 1px solid var(--green);
    border-radius: 2.5px;
    margin:20px auto;
    outline: none;
  }
  button {
    padding: 3px 10px;
    border-radius: 2.5px;
    width: 85%;
    background-color: var(--brown);
    color: white;
    border: 1px solid var(--brown);
    font-family: 'League Spartan', sans-serif;
  }
  hr {
    width: 80%;
  }
  form {
    background-color: var(--green);
    text-align: center;
   padding: 25px 0;
   width: 90%;
    max-width: 300px;
    margin:20px auto;
    border-radius: 2.5px;
    }
    p {
      color: white;
      font-size: 12px;
    }
</style>