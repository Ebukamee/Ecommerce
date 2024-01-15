
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Flutterwave from 'vue-flutterwave'
 


const app = createApp(App)

app.use(router).use(store)
app.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-0f5b5091d5d09d44895c2b925ed353f4-X' })


app.mount('#app')
