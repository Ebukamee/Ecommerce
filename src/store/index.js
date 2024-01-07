import { createStore } from "vuex";
import { auth,googleIn, db, storage} from "@/firebase/config";
import {
        createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         signOut,onAuthStateChanged, 
         signInWithPopup,
         sendEmailVerification
         } from "firebase/auth";
import { collection,addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
const store = createStore({
    state: {
        user: null,
        IsVerified:false,
        authIsReady:false,
        imageUrl:'',
        Products:[]
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
                    
                    alert('Email Verificattion Link has been resent')
                })
        },
        async AddProducts(_,{Name,Price,Image,Description,Url}) {
                  try {
                    const Ref = ref(storage,"products" );
                    const ImagesRef = ref(Ref, Image.name)
                    Ref.name === ImagesRef.name; 
                    Ref.fullPath === ImagesRef.fullPath;  
                    const metadata = {
                        contentType: 'image/jpeg',
                      };
                    await uploadBytes(ImagesRef, Image, metadata).then((snapshot) => {
                        console.log(Image,snapshot);
                      });
                      
                    await setTimeout(() => {
                        getDownloadURL(ref(Ref,Image.name)).then((url) => {
                            this.state.imageUrl = url
                            console.log(this.state.imageUrl)
                        })
                    }, 1000)
                    await setTimeout(() => {
                        addDoc(collection(db, "Products"),{Name,Price,Description,Url});
                    }, 3000)
                  } catch (error) {
                    console.error('Error adding item to Firestore:', error);
                  }
        },
        async getProducts() {
            const latest =await getDocs(collection(db,'Products'));
           latest.forEach((doc) => {
            this.state.Products.push(doc.data());
          });
            console.log(this.state.Products)
        }
    }
})
const unsub=onAuthStateChanged(auth, (user)=> {
    store.commit('setAuthIsReady',true)
    store.commit('setUser',user)
    unsub()
})
export default store