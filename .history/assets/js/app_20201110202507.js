function showNotification() {
  const notification = new Notification("new message from Robert :)", {
    body: "hey mate, how are ya?",
  });
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permision);
  });
}
