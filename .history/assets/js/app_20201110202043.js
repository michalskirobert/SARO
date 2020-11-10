console.log(Notification.permission);

if(Notification.permission === "granted") {
  alert("we have permision!");
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {console.log(permision)})}}