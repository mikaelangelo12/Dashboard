    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAWRwYGFtIunxOOe02eWunqGAuMJaPi9yc",
      authDomain: "online-painel.firebaseapp.com",
      projectId: "online-painel",
      storageBucket: "online-painel.appspot.com",
      messagingSenderId: "629336713196",
      appId: "1:629336713196:web:e7c6968db500e5b70e82c9",
      measurementId: "G-N4171KE1X1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log(app)
    console.log(analytics)