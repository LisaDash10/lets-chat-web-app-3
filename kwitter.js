function add_user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    if(document.getElementById("user_name").value = ""){
        htmldata = "<label style='color: red;'>You need to enter a username</label>";
        document.getElementById("htmldata").innerHTML = htmldata;
    }
}