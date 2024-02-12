import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth ,signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  auth.languageCode = 'en'

  const Google_Login = document.getElementById('gooh')
  Google_Login.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    //window.location.href= "../login.html"
    console.log(result);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  })



  