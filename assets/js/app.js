import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getDatabase, ref, set, onValue, get} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
// realtime database============== authentication & realtime data save
const firebaseConfig = {
  apiKey: "AIzaSyBMsGqlTvnRCpb4DHaPVq3dT86yoNJAlBg",
  authDomain: "authentication-6d325.firebaseapp.com",
  databaseURL: "https://authentication-6d325-default-rtdb.firebaseio.com",
  projectId: "authentication-6d325",
  storageBucket: "authentication-6d325.appspot.com",
  messagingSenderId: "783747578775",
  appId: "1:783747578775:web:a076e961dc2699956b62d2",
  measurementId: "G-QM1LYX73CQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase()

let registerBtn = document.getElementById('registerBtn')
registerBtn.addEventListener("click", function(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        set(ref(db, `users/${user.uid}`), {
         
          email: email,
          password: password
        })
        .then(() => {
          alert("succesfully signup")
          console.log("User data saved successfully");
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Registration error: ", errorMessage);
      });
});

let loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener("click", function(){
    let loginEmail = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
     
    const user = userCredential.user;
  //   onValue(ref(db,`users/${user.uid}`),(data)=>{
  //     console.log("data==>", data.val());
  //   })
  get(ref(db,`users/${user.uid}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  alert("sucessfully Login")
  })
 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error", errorMessage);
  });
})
// section one start====================================





