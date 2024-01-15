<template>
  <nav class="desktop">
    <div class="logo">
      <h2>Retro</h2>
    </div>
    <ul :class="user ? 'flex':'' ">
      <li @click="$router.push('/')">Home</li>
      <li @click="$router.push('/shop')">Shop</li>
      <li v-if="user && user.uid == id" @click="$router.push('/addProducts')">
        Add Product
      </li>
      <template v-if="auth">
        <div class="log" v-if="!user">
          <button class="log" @click="Login">Log In</button>
          <button class="signup" @click="SignUp">Sign Up</button>
        </div>
        <div class="login" v-else>
          <div class="circle" @click="show = !show">
        <i class="fa fa-user pu"></i>
      </div>
          <i class="bx bx-shopping-bag"  @click="$router.push('/cart')"></i>
        </div>
      </template>
      <div class="profile"></div>
    </ul>
  </nav>
  <nav class="mobile" v-if="auth">
    <div class="menu_container">
      <img src="../assets/icon-menu.svg" alt="" class="menu" @click="menu" />
    </div>
    <div class="logo">
      <h2>Retro</h2>
    </div>
    <div class="log" v-if="!user">
      <button class="log" @click="Login">Log In</button>
      <button class="log" @click="SignUp">Sign Up</button>
    </div>
    <div class="login" v-else>
      <div class="circle" @click="show = !show">
        <i class="fa fa-user pu"></i>
      </div>
      <i class="bx bx-shopping-bag" @click="$router.push('/cart')"></i>
    </div>
  </nav>
  <div class="profile" v-if="user" v-show="show">
    <h3>{{ user.uid == $store.state.adminId ? 'Administrator' : 'User' }}</h3>
    <p>{{ user.email }}</p>
    <span @click="logout">Log out</span>
  </div>
  <div :class="menu_class">
    <ul>
      <li>
        <img
          src="../assets/icon-close.svg"
          alt="close"
          id="cloxe"
          @click="menu"
        />
      </li>
      <li @click="$router.push('/')">Home</li>
      <li @click="$router.push('/shop')">Shop</li>
      <li v-if="user && user.uid == id" @click="$router.push('/addProducts')">
        Add Product
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      open: false,
      show:false,
      menu_class: "mobile_menu",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    id() {
        return this.$store.state.adminId
    },
    auth() {
      return this.$store.state.authIsReady;
    },
  },
  methods: {
    Login() {
      this.$router.push("/login");
    },
    SignUp() {
      this.$router.push("/signup");
    },
    logout() {
      setTimeout(() => {
        this.$store.dispatch("logout");
      }, 1000);
    },
    menu() {
      this.open = !this.open;
      if (this.open) {
        this.menu_class = "active";
      } else {
        this.menu_class = "mobile_menu";
      }
    },
  },
};
</script>

<style scoped>
@import "/src/assets/index.css";

nav ul li {
  display: inline-block;
}
.pu {
 color: white;
}
ul li {
  display: grid;
  margin: 0 7px;
  font-weight: 700;
  cursor: pointer;
}
ul {
  font-size: 14px;
}

.logo {
  color: var(--green);
  margin-top: 10px;
}
ul div {
  display: inline-block;
}
.flex {
  display: flex;
  align-items: center;
}
.circle {
  width: 20px;
  height: 20px;
  padding: 1px;
  background-color: var(--green);
  border: 1px solid var(--green);
  border-radius: 50%;
  text-align: center;
}
.profile {
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  width: fit-content;
  box-shadow: 5px 5px 10px gray;
  z-index: 1;
  position: absolute;
  top: 50px;
  right: 20px;
}
nav.desktop {
  display: grid;
  grid-template-columns: 65% 35%;
  width: 90%;
  /* margin:10px 5%; */
}

button {
  background-color: var(--green);
  color: #fff;
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 5px 5px;
  margin: 5px 2px;
}
.login {
  display: flex;
  align-items: center;
  width: 50px;
  justify-content: space-between;
}
.login-btn {
  background-color: var(--white);
  border: 1px solid var(--blue);
  color: var(--black);
}
nav.mobile {
  display: none;
}
nav {
  margin: 5px 5%;
  box-sizing: border-box;
  width: 90%;
}
.menu_close,
.menu {
  display: none;
}
nav h2 {
  margin: 0;
}
.mobile_menu {
  display: none;
}
span {
  font-family: Poppins , 'sans-serif';
}
@media (max-width: 750px) {
  .mobile_menu {
    display: none;
    z-index: 1;
    position: absolute;
    top: 10;
    left: -100;
    background-color: white;
  }
  .active {
    display: block;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    transition: 5s;
    height: 100%;
    width: 60%;
    box-shadow: 0 0.5px 5px 0 rgba(0, 0, 0, 0.3),
      0 7px 21px 0 rgba(0, 0, 0, 0.2);
  }
  .menu {
    width: 20px;
    display: block;
    height: 20px;
    margin-top: 5px;
  }
  nav.desktop {
    display: none;
  }
  nav.mobile {
    display: flex;
    /* grid-template-columns: 33% 33% 34% */
    justify-content: space-between;
    width: 90%;
  }
  /* .menu-button {
        width: 20px;
        margin:5px  0;
        z-index: 1;
    }
    .menu.close {
        display: block;
        width: 0;
    }
    .menu {
        display: block;
        position: absolute;
        width: 60%;
        background-color: var(--white);
        height: 100%;
        top: 0;
        text-align: center;
        transition: 20s;
    } */
  ul li {
    margin: 15px 0;
  }
  .button-area {
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    justify-content: space-around;
  }
  .button-area .no {
    margin-top: 20px;
  }
  
.login {
  display: flex;
  align-items: center;
  width: 50px;
  justify-content: space-between;
}
.logo {
  margin: 0;
}
}
</style>
