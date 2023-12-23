import { createStore } from "vuex";
import { auth,googleIn } from "@/firebase/config";
import {
        createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         signOut,onAuthStateChanged, 
         signInWithPopup,
         sendEmailVerification
         } from "firebase/auth";

const store = createStore({
    state: {
        user: null,
        IsVerified:false,
        authIsReady:false
    },
    mutations:{
        setUser(state,payload) {
            state.user = payload
            console.log('user state changed,', state.user)
        },
        setAuthIsReady(state,payload)  {
            state.authIsReady = payload
        }
    },
    actions: {
       async signup(context,{email, password}) {

            const res = await createUserWithEmailAndPassword(auth,email,password)
            if(res) {
                context.commit('setUser',res.user)
                sendEmailVerification(auth.currentUser)
                .then (() => {
                    
                    alert('Email Link has been sent')
                })
            }
            else {
                throw new Error('Something went wrong')
            }
        },
        async login(context,{email,password}) {
            const resp = await signInWithEmailAndPassword(auth,email,password)
            if (resp) {
                context.commit('setUser', resp.user)
            }
            else {
                throw new Error('Something went wrong')
            }
        },
        async googleLogIn(context) {
            const reponse = await signInWithPopup(auth,googleIn)
            if(reponse) {
                context.commit('setUser', reponse.user)
            }
            else {
                throw new Error('Something went wrong')
            }
        },
        async logout(context) {
            await signOut(auth)
            context.commit('setUser', null)
        },
        async sendEmail() {
           await sendEmailVerification(auth.currentUser)
                .then (() => {
                    
                    alert('Email Link has been resent')
                })
        }
    }
})
const unsub=onAuthStateChanged(auth, (user)=> {
    store.commit('setAuthIsReady',true)
    store.commit('setUser',user)
    unsub()
})
export default store