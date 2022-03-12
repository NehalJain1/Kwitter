
function adduser() {
    user = document.getElementById("user_input").value;
    localStorage.setItem("user_name",user);

    window.location = "Page2_kwitter_room.html";
}