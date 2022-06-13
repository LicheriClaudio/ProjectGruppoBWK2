/* const { response } = require("express"); */

//------------------ USERS ------------------------
const APIusers = "http://localhost:3000/api/users/";
const APIphoto = "http://localhost:3000/api/photo/";
const APIcom = "http://localhost:3000/api/comment/";
const APIpost = "http://localhost:3000/api/pst/";
const APIalbum = "http://localhost:3000/api/album/";

document.addEventListener("DOMContentLoaded", function () {
  /* let addBtn = document.querySelector("#formUser button");
  addBtn.addEventListener("click", addUser); */
  //GET
  getAllUsers();
  getAllPost();
  getAllAlbum();
  getAllComment();
  getAllPhoto();
  //DETAIL
  detailUser(1);
  detailPost(1);
  detailPhoto(1);
  detailAlbum(1);
  detailComment(1);
  //ADD
  addUser();


  //REMOVE
});


//------------------USERS ------------------------
  //------GET
function getAllUsers() {
  fetch(APIusers)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      /* printTableUser(json); */
      /* console.log(users); */
      console.log(APIusers)
    });
}
//----DETAIL
function detailUser(id) {
  fetch(APIusers + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

//---ADDUSERS
function addUser() {
  let name = document.querySelector('#formUser input[name="nome"]');
  let username = document.querySelector('#formUser input[name="cognome"]');
  let email = document.querySelector('#formUser input[name="email"]');

  fetch(APIusers, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      getAllUsers();

      name.value = "";
      username.value = "";
      city.value = "";
      email.value = "";
    });
}



//------------------ POST ------------------------
  //------GET
  function getAllPost() {
    fetch(APIpost)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        /* printTableUser(json); */
        /* console.log(users); */
        console.log(APIpost);
      });
  }

  //----DETAIL
function detailPost(id) {
  fetch(APIpost + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
//---ADDPost
function addPost() {
  let userId = document.querySelector('#formUser input[userId="number"]');
  let id = document.querySelector('#formUser input[id="number"]');
  let title = document.querySelector('#formUser input[title="title"]');

  fetch(APIpost, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      getAllUsers();

      userId.value = APIusers + id;
      id.value = count++;
      title.value = "";
     
    });
}
//------------------ COMMENT ------------------------
//------GET
  function getAllComment() {
    fetch(APIcom)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        /* printTableUser(json); */
        /* console.log(users); */
        console.log(APIcom);
      });
  }
  //----DETAIL
function detailComment(id) {
  fetch(APIcom + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
//------------------ PHOTO ------------------------
//------GET
  function getAllPhoto() {
    fetch(APIphoto)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        /* printTableUser(json); */
        /* console.log(users); */
        console.log(APIphoto);
      });
  }
  //----DETAIL
function detailPhoto(id) {
  fetch(APIphoto + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
//------------------ ALBUM ------------------------
//------GET
  function getAllAlbum() {
    fetch(APIalbum)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        /* printTableUser(json); */
        /* console.log(users); */
        console.log(APIalbum);
      });
  }
  //----DETAIL
function detailAlbum(id) {
  fetch(APIalbum + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
