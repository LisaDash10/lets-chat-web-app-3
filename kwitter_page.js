var firebaseConfig = {
    apiKey: "AIzaSyA3O6xfGzvJPnxqvVMkB7oeiK3rlhVqYBs",
    authDomain: "lets-chat-project-e10ab.firebaseapp.com",
    databaseURL: "https://lets-chat-project-e10ab-default-rtdb.firebaseio.com",
    projectId: "lets-chat-project-e10ab",
    storageBucket: "lets-chat-project-e10ab.appspot.com",
    messagingSenderId: "680274294402",
    appId: "1:680274294402:web:2e46c7efaf9e19725f269b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room name");

  document.getElementById("room").innerHTML = room_name;

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room name");
    window.location = "index.html";
  }

  function send() {
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      likes:0
    });

    document.getElementById("msg").innerHTML = "";
  }

  