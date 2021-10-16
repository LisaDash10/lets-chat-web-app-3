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
  document.getElementById("user_name").innerHTML = " Welcome "+ user_name +"!";

  function add_room() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose:"adding user"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name - "+ Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name = "+name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room name");
  window.location = "index.html";
}