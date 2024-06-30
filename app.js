  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQYCStbteH-TbUnvNIFZ6uiS2PmqKHAdU",
    authDomain: "eng-venture-409614.firebaseapp.com",
    projectId: "eng-venture-409614",
    storageBucket: "eng-venture-409614.appspot.com",
    messagingSenderId: "264666422274",
    appId: "1:264666422274:web:4a0d9ac509bc542e069b1b",
    measurementId: "G-VNJSLQFBDR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  var signup_email = document.getElementById('signup_email');
  var signup_password = document.getElementById('signup_password');
  var signup_btn = document.getElementById('signup_btn');

  var email_login = document.getElementById("email_login");
  var password_login = document.getElementById("password_login");
  var login_btn = document.getElementById("login_btn");

  var logout_btn = document.getElementById("logout_btn");
  var auth_container = document.getElementById("auth_container");
  var user_container = document.getElementById("user_container");
  var user_email = document.getElementById("user_email");





  signup_btn.addEventListener("click", createUserAccount);
  signin_btn.addEventListener("click", signIn);
  login_btn.addEventListener("click", logout);

  // console.log('auth=>', auth);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is Logged in');
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    // ...
  } else {
    console.log('User is not Logged in');
    // User is signed out
    // ...
    auth_container.style.display = "block";
    user_container.style.display = "none";
  }
});

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  function createUserAccount(){
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  function signIn(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email_login.value, password_login.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });    
  }
  function logout(){
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }



