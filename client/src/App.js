import './App.css';
import "./firebase.js";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";
import { onMessage } from "firebase/messaging";


const messaging = getMessaging();

const notifyUser = (notificationText = "Thank you for enabling notifications!") =>  {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification")
  } else if (Notification.permission === "granted") {
     new Notification(notificationText);
  } else if (Notification.permission !== "denied") {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
         new Notification(notificationText);
      }
    })
  }
}

function App() {
  useEffect(() => {
    notifyUser();
    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground useeffect: ', payload);

      // Extract notification content from payload
      const { title, body, icon } = payload.notification;

      // Display the notification using the Web Notifications API
      new Notification(title, {
        body: body,
        icon: icon || '/logo512.png' // Provide a default icon if not specified
      });
    });
  }, [])

  const retrieveToken = () => {
    getToken(messaging, { vapidKey: 'BOI9AcoqEC71MNQssauLa9BwghjG_gWOay0kUOg0DSt9Tj4zEoA8wYlXUt8Q6fKGc3d3HA_B_etL5-ZPV3tbsVI' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  return (
    <div className="App">
      <button onClick={() => retrieveToken()}>
        Get Token
      </button>

      <button onClick={() => {
        notifyUser("show stuff plz")
      }}>
        Test Notifcation
      </button>
    </div>
  );
}

export default App;
