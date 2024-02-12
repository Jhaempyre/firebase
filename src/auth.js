import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth ,createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlQdFoy-Rpg8Ur32zBaQyZAyvWP8HG8EM",
    authDomain: "firebias.firebaseapp.com",
    databaseURL: "https://firebias-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "firebias",
    storageBucket: "firebias.appspot.com",
    messagingSenderId: "616043658098",
    appId: "1:616043658098:web:ca5734dfe580c0f118fbeb",
    measurementId: "G-GR7YKMWEJ2"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);



  let email_input = document.getElementById('email_input');
  let password_input = document.getElementById('password_input');
  let first_input = document.getElementById('first_input');
  let last_input = document.getElementById('last_input');

  let Registeruser = event =>{
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email_input.value , password_input.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  }
  mainform.addEventListener('submit', Registeruser)
  
  let signInwithGoogle = event =>{
    event.preventDefault()

    signInWithPopup(auth, provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log( getAdditionalUserInfo(result))

    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    })

  }
  mainform.addEventListener('submit',signInwithGoogle)