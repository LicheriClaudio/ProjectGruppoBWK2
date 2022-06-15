const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var fs = require("fs");
var users = JSON.parse(fs.readFileSync("json/users.json", "utf8"));
var post = JSON.parse(fs.readFileSync("json/pst.json", "utf8"));
var com = JSON.parse(fs.readFileSync("json/comment.json", "utf8"));
var album = JSON.parse(fs.readFileSync("json/album.json", "utf8"));
var photo = JSON.parse(fs.readFileSync("json/photo.json", "utf8"));


// GET
//--------------------------------USERS---------------------------------------
app.get("/api/users", (request, response) => {
  response.json(users);
});

app.get("/api/users/:id", (request, response) => {
  const id = request.params.id;
  users.forEach((ele) => {
    if (ele.id === +id) {
      response.json(ele);
      return;
    }
  });
});
//--------------------------------POST---------------------------------------
app.get("/api/pst", (request, response) => {
  response.json(post);
});

app.get("/api/pst/:id", (request, response) => {
  const id = request.params.id;
  post.forEach((ele) => {
    if (ele.id === +id) {
      response.json(ele);
      return;
    }
  });
});
//--------------------------------COMMENT---------------------------------------
app.get("/api/comment", (request, response) => {
  response.json(com);
});

app.get("/api/comment/:id", (request, response) => {
  const id = request.params.id;
  com.forEach((ele) => {
    if (ele.id === +id) {
      response.json(ele);
      return;
    }
  });
});
//--------------------------------ALBUM---------------------------------------
app.get("/api/album", (request, response) => {
  response.json(album);
});

app.get("/api/album/:id", (request, response) => {
  const id = request.params.id;
  album.forEach((ele) => {
    if (ele.id === +id) {
      response.json(ele);
      return;
    }
  });
});
//--------------------------------PHOTO---------------------------------------
app.get("/api/photo", (request, response) => {
  response.json(photo);
});

app.get("/api/photo/:id", (request, response) => {
  const id = request.params.id;
  photo.forEach((ele) => {
    if (ele.id === +id) {
      response.json(ele);
      return;
    }
  });
});
// POST
//---------------------USERS----------------------
let countUsers = 10;
app.post("/api/users", (request, response) => {

  const obj = request.body;
  console.log(obj);
  obj.id = countUsers++;
  users.push(obj);
  response.json("Utente Aggiunto nel DB");
});

//-------------------------PHOTO-------------------
let countPhoto = 5000;
app.post("/api/photo", (request, response) => {
  const obj = request.body;
  console.log(obj);
  obj.id = countPhoto++;
  photo.push(obj);
  response.json("Utente Aggiunto nel DB");
});
//-------------------------ALBUM-------------------
let countAlbum = 100;
app.post("/api/album", (request, response) => {
  const obj = request.body;
  console.log(obj);
  obj.id = countAlbum++;
  album.push(obj);
  response.json("Utente Aggiunto nel DB");
});
//-------------------------COMMENT-------------------
let countComment = 500;
app.post("/api/comment", (request, response) => {
  const obj = request.body;
  console.log(obj);
  obj.id = countComment++;
  com.push(obj);
  response.json("Utente Aggiunto nel DB");
});
//-------------------------POST-------------------
let countPost = 100;
app.post("/api/pst", (request, response) => {
  const obj = request.body;
  console.log(obj);
  obj.id = countPost++;
  post.push(obj);
  response.json("Utente Aggiunto nel DB");
});

// PUT
//-------------------------USERS-------------------
app.put("/api/users/:id", (request, response) => {
  const id = request.params.id;
  const obj_mod = request.body;
  console.log(obj_mod);
  //Soluzione 1
  let obj = users.find(ele => ele.id === +id);
  obj = obj_mod;

  response.json("Utente Modificato nel DB");
});

//-------------------------POST-------------------
app.put("/api/pst/:id", (request, response) => {
  const id = request.params.id;
  const obj_mod = request.body;

  //Soluzione 1
  let obj = post.find(ele => ele.id === +id);
  obj = obj_mod;

  response.json("Utente Modificato nel DB");
});
//-------------------------PHOTO-------------------
app.put("/api/photo/:id", (request, response) => {
  const id = request.params.id;
  const obj_mod = request.body;

  //Soluzione 1
  let obj = photo.find(ele => ele.id === +id);
  obj = obj_mod;

  response.json("Utente Modificato nel DB");
});
//-------------------------ALBUM-------------------
app.put("/api/album/:id", (request, response) => {
  const id = request.params.id;
  const obj_mod = request.body;

  //Soluzione 1
  let obj = album.find(ele => ele.id === +id);
  obj = obj_mod;

  response.json("Utente Modificato nel DB");
});
//-------------------------COMMENT-------------------
app.put("/api/comment/:id", (request, response) => {
  const id = request.params.id;
  const obj_mod = request.body;

  //Soluzione 1
  let obj = com.find(ele => ele.id === +id);
  obj = obj_mod;

  response.json("Utente Modificato nel DB");
});

// DELETE
//-------------------------USERS-------------------
app.delete("/api/users/:id", (request, response) => {
  const id = request.params.id;
  //Soluzione 1
  users = users.filter((ele) => ele.id !== +id);

  response.json("Utente Eliminato dal DB");
});

//-------------------------POST-------------------
app.delete("/api/pst/:id", (request, response) => {
  const id = request.params.id;
  //Soluzione 1
  post = post.filter((ele) => ele.id !== +id);

  response.json("Utente Eliminato dal DB");
});
//-------------------------COMMENT-------------------
app.delete("/api/comment/:id", (request, response) => {
  const id = request.params.id;
  //Soluzione 1
  com = com.filter((ele) => ele.id !== +id);

  response.json("Utente Eliminato dal DB");
});

//-------------------------ALBUM-------------------
app.delete("/api/album/:id", (request, response) => {
  const id = request.params.id;
  //Soluzione 1
  album = album.filter((ele) => ele.id !== +id);

  response.json("Utente Eliminato dal DB");
});
//-------------------------PHOTO-------------------
app.delete("/api/photo/:id", (request, response) => {
  const id = request.params.id;
  //Soluzione 1
  photo = photo.filter((ele) => ele.id !== +id);

  response.json("Utente Eliminato dal DB");
});

app.listen(port, () => console.log("Server attivo sulla porta 3000"));
