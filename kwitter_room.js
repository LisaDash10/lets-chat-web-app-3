firebaseConfig = {
  apiKey: "AIzaSyCRhMQ2fNINKTt4Y8iL3kdCfD8qv2Gqsmo",
  authDomain: "chat-corner-database.firebaseapp.com",
  databaseURL: "https://chat-corner-database-default-rtdb.firebaseio.com",
  projectId: "chat-corner-database",
  storageBucket: "chat-corner-database.appspot.com",
  messagingSenderId: "653862774824",
  appId: "1:653862774824:web:b20bd56328dfb9f02fad1d"
};

// Initialize Firebase
//app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML =  user_name;

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