function showNotification() {
  const notification = new Notification("new message from Robert :)", {
    body: "hey mate, how are ya?",
  });
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
  alert("we have permision!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permision);
  });
}
