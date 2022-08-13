function addroom(){

function getData(){firebase.database().ref("/").on('value' , 
function(snapshot){document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot){childkey = 
childSnapshot.key;
Room_names = childkey;
//Start Code

//End Code

});});}
getData();

row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectRoRoomName(this.id)'>"+Room_names+"</div><hr>";



}