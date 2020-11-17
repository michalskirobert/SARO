function showNotification() {
  const notification = new Notification("Hello, we are SARO!", {
    body: "Wiadomość",
    icon: "Ikona do powiadomienia",
  });
  notification.onclick = (e) => {
    window.location.href = "URL DO NOWOŚCI";
  };
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotification();
    }
  });
}

//by Robert Michalski
