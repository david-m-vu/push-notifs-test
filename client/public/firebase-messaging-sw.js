// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// REPLACE WITH YOUR OWN CONFIG
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

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo512.png',
    sound: '/audio/alert_sound.mp3',
    vibrate: [300, 100, 400],
    requireInteraction: true,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

function showReminder() {
  const notificationTitle = 'Reminder';
  const notificationOptions = {
    body: 'Here is your 5-second reminder',
    icon: '/logo512.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
}

self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Close the notification when clicked
  const audio = new Audio('/audio/alert_sound.mp3'); // Path to your sound file
  audio.play(); // Play the audio
});


// self.addEventListener('activate', function (event) {
//   console.log('Service worker activated');

//   showReminder();

//   function loop() {
//     setTimeout(() => {
//       showReminder();
//       loop();
//     }, 5000); // 5 seconds
//   }

//   loop();
// });