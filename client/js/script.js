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
  getAllUsers(1);
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

function getAllUsers(page) {
  let list = document.querySelector('#general');
            while (list.hasChildNodes()) {  
                list.removeChild(list.firstChild);
            }
  fetch(APIusers)
    .then((response) => response.json())
    .then(usersArr => {
      let pageCount = page*5;
     pageUsers = usersArr.slice(pageCount-5, pageCount);
     pageUsers.forEach(user => {

        let a = document.querySelector
          ('#general');
        let cardA = document.createElement('div');
        cardA.className = 'col';
        a.appendChild(cardA);

        let cardB = document.createElement('div');
        cardB.classList = 'card';
        cardA.append(cardB);

        let cardD = document.createElement('div');
        cardD.className = 'card-body';
        cardB.append(cardD);

        fetch(APIphoto)
        .then((response) => response.json())
        .then(photoArr => {
          photoArr.forEach(photo => {
            if (photo.id === user.id) {

        let carImg = document.createElement('div');
        carImg.className = 'cardImg';
        carImg.innerHTML = `<img src="${photo.thumbnailUrl}">`
        cardD.append(carImg);
          }
          
        });

        let cardName = document.createElement('h5');
        cardName.className = 'card-text';
        cardName.innerText = `${user.name}`;
        cardD.append(cardName);
        


        let hr = document.createElement('hr');
        cardD.append(hr);

        let cardAddress = document.createElement('p');
        cardAddress.className = 'card-text';
        cardAddress.innerText = `${user.address.street}, ${user.address.suite} (${user.address.city})`;
        cardD.append(cardAddress);

        let cardEmail = document.createElement('p');
        cardEmail.className = 'card-text';
        cardEmail.innerText = `${user.email}`;
        cardD.append(cardEmail);

        let cardPhone = document.createElement('p');
        cardPhone.className = 'card-text';
        cardPhone.innerText = `Tel: ${user.phone}`;
        cardD.append(cardPhone);
      });
    });
});
pagination() 
}




//---ADDUSERS
function addUser() {
  let name = document.querySelector('#formUser input[name="nome"]');
  let username = document.querySelector('#formUser input[name="cognome"]');
  let email = document.querySelector('#formUser input[name="email"]');

  let obj = {
    name: name.value,
    username: username.value,
    city: city.value,
    email: email.value,
    password: "qwerty",
  };

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

  let obj = {
    userId: userId.value,
      id:id.value,
      title: title.value
}

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





function  searchUser() {
  

  let searchItem = document.querySelector('form input');
  fetch(APIusers)
  .then((response) => response.json())
  .then((usersArr) => {
  
    /* printTableUser(json); */
    /* console.log(users); */
  
  usersArr.forEach(user => {
  if (searchItem.value === user.name) {
    

  let list = document.querySelector('#general');
            while (list.hasChildNodes()) {  
                list.removeChild(list.firstChild);
            }
          
          
  let a = document.querySelector('#general');
        let cardA = document.createElement('div');
        cardA.className = 'col';
        a.appendChild(cardA);

        let cardB = document.createElement('div');
        cardB.classList = 'card';
        cardA.append(cardB);

        let cardD = document.createElement('div');
        cardD.className = 'card-body';
        cardB.append(cardD);

        fetch(APIphoto)
        .then((response) => response.json())
        .then(photoArr => {
          photoArr.forEach(photo => {
            if (photo.id === user.id) {

        let carImg = document.createElement('div');
        carImg.className = 'cardImg';
        carImg.innerHTML = `<img src="${photo.thumbnailUrl}">`
        cardD.append(carImg);
          }
          
        });

        let cardName = document.createElement('h5');
        cardName.className = 'card-text';
        cardName.innerText = `${user.name}`;
        cardD.append(cardName);
    


        let hr = document.createElement('hr');
        cardD.append(hr);

        let cardAddress = document.createElement('p');
        cardAddress.className = 'card-text';
        cardAddress.innerText = `${user.address.street}, ${user.address.suite} (${user.address.city})`;
        cardD.append(cardAddress);

        let cardEmail = document.createElement('p');
        cardEmail.className = 'card-text';
        cardEmail.innerText = `${user.email}`;
        cardD.append(cardEmail);

        let cardPhone = document.createElement('p');
        cardPhone.className = 'card-text';
        cardPhone.innerText = `Tel: ${user.phone}`;
        cardD.append(cardPhone);
      });
    }
    });
  
});
}

function pagination() {

  fetch(APIusers)
      .then((response) => response.json())
      .then((json) => {

  let count = json.length / 5;
  let page = Math.ceil(count);
  let pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';
  for(let i=1; i<=page; i++){
      pagination.innerHTML += '<li class="page-item"><button onclick="getAllUsers('+i+')" class="page-link" href="#">'+i+'</button></li>';
  }

});
}
