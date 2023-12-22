<template>
    <div class="login">
        <div class="logo">
            <h2>Shopify</h2>
        </div>
        <div class="form">
          <form @submit.prevent="handleSubmit">
            <input type="email" name="email" id="email" v-model="email" required>
            <input type="password" name="password" id="" v-model="password" required>
            <input type="password" name="confirm" id="" v-model="confirm" required>
            <p v-if="error" id="error">{{ error }}</p>
            <button>Sign up</button>
        </form>
        <hr>
        <button @click="GoogleLogIn">Sign up with google</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return{
      email:'',
      password:'',
      confirm:'',
      error:'',
    }
  },
  mounted() {
    console.log(this.$store.state.user)
  },
  methods: {
    async handleSubmit() {
      if (this.confirm===this.password){
        try {
        await this.$store.dispatch('signup',{
          email:this.email,
          password:this.password
        })
        this.$router.push('/')
      } catch(err) {
        this.error = err.message
      }
      }
      else {
        this.error = 'Password does not match'
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
    color: var(--green);
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
        color: rgb(251, 5, 5);
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
