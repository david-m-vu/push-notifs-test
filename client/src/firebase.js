import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD82dVDOwu-Y6EXLHyFzx0LTKMMTnJD7Jk",
    authDomain: "push-notifications-ff03e.firebaseapp.com",
    projectId: "push-notifications-ff03e",
    storageBucket: "push-notifications-ff03e.appspot.com",
    messagingSenderId: "192226570518",
    appId: "1:192226570518:web:fb32d20ae665de3bab6037",
    measurementId: "G-N8C94QW4R6"
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

  