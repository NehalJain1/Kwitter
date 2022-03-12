//YOUR FIREBASE LINKS
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

//--------------------------------------------------------------------------------------------------------------
//Get user name and room name from local storage
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

//--------------------------------------------------------------------------------------------------------------

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("firebase message id",firebase_message_id);
console.log("message data",message_data);
message = message_data["message"];
like = message_data["like"];
userN = message_data["name"];
// <h4 id="user"> userN <img src="tick.png" class="user_tick"> </h4>
Tag_with_username = ' <h4 id="user"> ' + userN + ' <img src="tick.png" class="user_tick"> </h4> ' ;
// <h4 class="Message"> message </h4>
Tag_with_message = ' <h4 class="Message"> ' + message + '</h4>' ; 
// <button class="btn-warning" id="firebasebaseid" value=likevariable onclick="addlike(this.id)" <span class='glyphicon glyphicon-thumbs-up'>LIKE: likevariable </span></button><hr></hr>
Tag_with_likebtn = '<button class="btn-warning" id="' + firebase_message_id +' " value=' + like +' onclick="addlike(this.id) >" ' ;
span = '<span class="glyphicon glyphicon-thumbs-up">LIKE: ' + like + '</span></button><hr></hr>';

row = Tag_with_username + Tag_with_message + Tag_with_likebtn + span ;
document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row ;
//End code
      } });  }); }
getData();

//--------------------------------------------------------------------------------------------------------------
//Send funtion = to store data in firebase

function Send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
      message : message,
      name : user_name,
      like : 0
      });
      document.getElementById("message").value = "" ;
}
function addlike(button_id) {
console.log(button_id);
like = document.getElementById(button_id).value ;
updated_like = Number(like) + 1 ;

firebase.database().ref(room_name).child(button_id).update({ like : updated_like });
}

function logout() {
      localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}