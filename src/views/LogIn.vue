<template>
    <div class="login">
        <div class="logo">
            <h2>Shopify</h2>
        </div>
        <div class="form">
          <form @submit.prevent="handleSubmit">
            <input type="email" name="email" id="email" v-model="email">
            <input type="password" name="password" id="" v-model="password">
            <p v-if="error" id="error">{{ error }}</p>
            <button>Login</button>
        </form>
        <hr>
        <button @click="GoogleLogIn">Login with google</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return{
      email:'',
      password:'',
      error:''
    }
  },
  mounted() {
    console.log(this.$store.state.user)
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch('login',{
          email:this.email,
          password:this.password
        })
        this.$router.push('/')
      } catch(err) {
        this.error = err.message
      }
    },
    async GoogleLogIn() {
      try {
        await this.$store.dispatch('googleLogIn')
        this.$router.push('/')
      } catch(err) {
        this.error = err.message
      }
    }
  }
}
</script>


<style scoped>
 @import '/src/assets/index.css';

  div.login {
    text-align: center;
  }
  .logo {
    color: var(--green);
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
    padding: 2.5px 10px;
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
  .form {
    background-color: var(--green);
   padding: 25px 0;
   width: 90%;
    max-width: 300px;
    margin: auto;
    border-radius: 2.5px;
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
</style>
