import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// update this with your own firebase project config (can just make a temp project and you can copy and paste it from there)
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

  