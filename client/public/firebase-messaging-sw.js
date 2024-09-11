// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD82dVDOwu-Y6EXLHyFzx0LTKMMTnJD7Jk",
    authDomain: "push-notifications-ff03e.firebaseapp.com",
    projectId: "push-notifications-ff03e",
    storageBucket: "push-notifications-ff03e.appspot.com",
    messagingSenderId: "192226570518",
    appId: "1:192226570518:web:fb32d20ae665de3bab6037",
    measurementId: "G-N8C94QW4R6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// handles background messages (when app is minimized)
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/logo512.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
  