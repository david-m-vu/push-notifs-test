Testing push notifications with create react app and firebase cloud messaging

# Showing Notifications Even When the Tab Is Closed

This branch provides a proof of concept to show that it is possible to send notifications even when the website is closed. `client/public/firebase-messaging-sw.js` runs a loop that sends a notification every 5 seconds, and this loop continues running even after the user closes the tab.

To run:
```
$ npm run build && serve -s build
```
Then open `http://localhost:3000`. If the notification loop doesn't automatically start, you might have to open devtools, go to Application > Service Workers, click "Unregister" on each service worker, and then reload the page. If you close the tab, the notifications will continue appearing. To stop the infinite loop, click "Unregister" on the service worker.

If the user quits their browser, the notifications will stop. I don't think there's any way for us to deliver notifications when the browser is not running.