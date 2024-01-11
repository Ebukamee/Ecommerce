// Import Functions from Vuex, firebase-auth, firebase-firestore and firebase-storage
import { createStore } from "vuex";
import { auth,googleIn, db, storage} from "@/firebase/config";
import {
        createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         signOut,onAuthStateChanged, 
         signInWithPopup,
         sendEmailVerification
         } from "firebase/auth";
import { collection,addDoc, getDocs, orderBy,getDoc,doc } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
//  Intialize the store
const store = createStore({
    // Set an intial value for the state's data
    state: {
        user: null,
        IsVerified:false,
        authIsReady:false,
        imageUrl:'',
        adminId:'0MgQ0AWHZOQqZ1SobxwG7z2ZNzs2',
        Products:[],
        Cart:[],
        Product:[],
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
    async upLoadImage(_,{Image}) {
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
        }
        catch (error) {
            console.error('Error adding image to Firestore Storage:', error);
          }
    },
        async AddProducts(_,{Name,Price,Description,Url}) {
                  try {
                    await setTimeout(() => {
                        addDoc(collection(db, "Products"),{Name,Price,Description,Url});
                    }, 3000)
                  } catch (error) {
                    console.error('Error adding item to Firestore:', error);
                  }
        },
        async getProducts() {
            const latest =await getDocs(collection(db,'Products'), orderBy('date'));
           latest.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            this.state.Products.push(data);
            setTimeout(() => {
                this.state.Products =[]
            }, 500);
          });
            console.log(this.state.Products)
        },
        async getById(_,{documentId}) {
            const documentRef = doc(db,'Products',  documentId);
            const documentSnapshot = await getDoc(documentRef);
          
            if (documentSnapshot.exists()) {
            
              this.state.Product.push(documentSnapshot.data())
              setTimeout(() => {
                this.state.Products =[]
            }, 500);
            } 
            else {
            return null;
            }
          },
          async AddTocart(_,{Name,Price,Quantity,Url}) {
            try {
              await setTimeout(() => {
                  addDoc(collection(db, `UsersDetails/Cart/${this.state.user.uid}`),{Name,Price,Quantity,Url});
              }, 3000)
            } catch (error) {
              console.error('Error adding item to cart:', error);
            }
  },
  async getCart(_,{ Id }) {
const latest =await getDocs(collection(db,`UsersDetails/Cart/${Id}`));
    latest.forEach((doc) => {
     const data = doc.data()
     data.id = doc.id
     this.state.Cart.push(data);
     console.log(this.state.Cart)
     setTimeout(() => {
         this.state.Cart =[]
     }, 500);
   });
    }
}
})
const unsub=onAuthStateChanged(auth, (user)=> {
    store.commit('setAuthIsReady',true)
    store.commit('setUser',user)
    unsub()
})
export default store