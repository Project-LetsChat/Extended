var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  let msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });

  document.getElementById("msg").value = "";
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      let childKey = childSnapshot.key;
      let childData = childSnapshot.val();
      if (childKey != "purpose") {
        let firebase_message_id = childKey;
        let message_data = childData;

        console.log(firebase_message_id);
        console.log(message_data);

        let name = escapeHTML(message_data['name']);
        let message = escapeHTML(message_data['message']);
        let like = escapeHTML(String(message_data['like']));

        let name_with_tag = `<h4>${name} <img class='user_tick' src='tick.png'></h4>`;
        let message_with_tag = `<h4 class='message_h4'>${message}</h4>`;
        let like_button = `<button class='btn btn-warning' id=${firebase_message_id} value=${like} onclick='updateLike(this.id)'>`;
        let span_with_tag = `<span class='glyphicon glyphicon-thumbs-up'>Like: ${like}</span></button><hr>`;

        let row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
      }
    });
  });
}

function updateLike(message_id) {
  console.log("clicked on like button - " + message_id);
  let button_id = message_id;
  let likes = document.getElementById(button_id).value;
  let updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
  });
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

getData();
