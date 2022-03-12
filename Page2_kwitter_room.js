
//ADD YOUR FIREBASE LINKS HERE
//replace const with var

var firebaseConfig = {
      apiKey: "AIzaSyCyWAvRRMQ8J3YMhwaddRTkSHhe4X8Z9aA",
      authDomain: "class-96-45463.firebaseapp.com",
      databaseURL: "https://class-96-45463-default-rtdb.firebaseio.com",
      projectId: "class-96-45463",
      storageBucket: "class-96-45463.appspot.com",
      messagingSenderId: "380669813165",
      appId: "1:380669813165:web:cba177b66aa469e1a18124",
      measurementId: "G-3LMYR013JB"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + " !";

//-------------------------------------------------------------------------------------------------------------------
//gets all the room names from firebase and display in the row,

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //The Room_names variable holds all the room names coming from the firebase.
console.log("Room name :",Room_names);
row = '<div class="room_name" id=' + Room_names + ' onclick="Navigate_to_room(this.id)">' + Room_names + '</div> <hr>';
document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row;
      //End code
      });});}

//--------------------------------------------------------------------------------------------------------------
//Call the getData function
getData();

//---------------------------------------------------------------------------------------------------------------------
//gets the room name from textbox and add it to firebase,local storage,
 //navigate to kwitter_page.html

function Add_room() {
 room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({"room":"addroomname"});
localStorage.setItem("room_N",room_name);
//window.location = "Page3_index.html";
}
//---------------------------------------------------------------------------------------------------------------------
function Navigate_to_room(name) {
      console.log(name);
localStorage.setItem("room_name",name);
window.location = "Page3_index.html";
}

//-----------------------------------------------------------------------------------------------------------------

function logout() {
       localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

