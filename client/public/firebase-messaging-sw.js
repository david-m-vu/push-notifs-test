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
let reminderInterval;

function showReminder() {
  const notificationTitle = 'Earthquake Alert';
  const notificationOptions = {
    body: 'Take cover!!!',
    image: '/earthquake.png',
    icon: '/earthquake.png',
    badge: '/earthquake.png',
    vibrate: [300, 100, 400],
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
}

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
    image: '/earthquake.png',
    badge: '/earthquake.png',
    icon: '/earthquake.png',
    vibrate: [300, 100, 400],
    requireInteraction: true,
  };

  // self.registration.showNotification(notificationTitle, notificationOptions);

  showReminder();

  reminderInterval = setInterval(() => {
    showReminder();
  }, 5000); // 5 seconds
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close(); // Close the notification when clicked
  // const audio = new Audio('/audio/alert_sound.mp3'); // Path to your sound file
  // audio.play(); // Play the audio
  clearInterval(reminderInterval)
});
