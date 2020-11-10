function showNotification() {
  const notification = new Notification("new message from Robert :)", {
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
