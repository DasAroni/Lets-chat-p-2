// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCfXfORGd37dzdGIQNqKP7oSmnfCoGv-Po",
    authDomain: "lets-chat-89435.firebaseapp.com",
    projectId: "lets-chat-89435",
    storageBucket: "lets-chat-89435.appspot.com",
    messagingSenderId: "1009522795921",
    appId: "1:1009522795921:web:a675fdefce350ca6b0a630",
    measurementId: "G-DSPBCXLNDF"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



