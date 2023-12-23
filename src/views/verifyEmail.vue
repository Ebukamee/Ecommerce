<template>
  <div>
    <h2 class="logo">Shopify</h2>
    <p>
    We've sent a verification link to your inbox, verify your email to gain
    access to your account.
  </p>
  <p id="error" v-if="error">{{ error }}</p>
  <button @click="sendEmail">Click to resend Email</button>
  </div>
</template>

<style scoped>
 @import '/src/assets/index.css';
  div {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  #error {
        color: rgb(206, 28, 28);
        font-size: 12px;
        font-weight: bold;
        background-color: rgb(249, 223, 223);
        box-sizing: border-box;
        padding: 5px;
        width: 80%;
        margin-left: auto;
        margin-right:auto ;
    }
  button {
    background-color: var(--green);
    color:#fff ;
    border: 1px solid var(--green);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px;
    font-family: 'League Spartan', sans-serif;
}
.logo {
  color: var(--green);
  margin-bottom: 50px;
}
</style>

<script>
   export default {
    data() {
    return{
      error:''
    }
  },
    methods: {
      async sendEmail() {
        try {
        await this.$store.dispatch('sendEmail')
      } catch(err) {
        this.error = err.message
      }
      }
    }
   }
</script>


