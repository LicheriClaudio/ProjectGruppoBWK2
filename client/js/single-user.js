const APIpost = "http://localhost:3000/api/pst/";
const APIcom = "http://localhost:3000/api/comment/";
const APIalbum = "http://localhost:3000/api/album/";
const APIphoto = "http://localhost:3000/api/photo/";

document.addEventListener("DOMContentLoaded", function () {
    detailUser();
    showPost();
});

function detailUser() {
    var del = JSON.parse(sessionStorage.getItem('user'));
    let SUdiv = document.querySelector('#single_user');
    fetch(APIphoto)
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(photo => {
                if (del.id === photo.id) {
                    let profImg = document.createElement('img');
                    profImg.classList = 'rounded-circle me-3';
                    profImg.src = photo.thumbnailUrl;
                    SUdiv.append(profImg);
                }
            })
            let uName = document.createElement('h1');
            uName.innerText = `${del.name}`
            SUdiv.appendChild(uName);
        })


    let albumGenDiv = document.querySelector('#su_album');
    fetch(APIalbum)
        .then((response) => response.json())
        .then(albumArr => {
            albumArr.forEach(album => {
                if (del.id === album.userId) {
                    let albumDiv = document.createElement('div');
                    albumDiv.classList = 'card p-4';
                    albumGenDiv.append(albumDiv);
                    let albumTitle = document.createElement('h5');
                    albumTitle.innerText = `${album.title}`;
                    albumTitle.classList = "text-uppercase";
                    albumDiv.append(albumTitle);

                    let openPh = document.createElement('a');
                    openPh.setAttribute("data-bs-toggle", "collapse");
                    openPh.classList = "collapsed my-3";
                    openPh.href = `#collapse-ph${album.id}`;
                    openPh.innerText = "Vedi tutte le foto";
                    albumDiv.append(openPh);
                    let collapsePhDiv = document.createElement('div');
                    collapsePhDiv.classList = "collapse row row-cols-3 row-cols-md-5 g-4";
                    collapsePhDiv.id = `collapse-ph${album.id}`;
                    albumDiv.append(collapsePhDiv);
                    fetch(APIphoto)
                        .then((response) => response.json())
                        .then(photoArr => {
                            photoArr.forEach(photo => {
                                if (album.id === photo.albumId) {
                                    let photoAl = document.createElement('img');
                                    photoAl.src = photo.url;
                                    collapsePhDiv.append(photoAl);
                                }
                                let photoGenDiv = document.querySelector('#su_photo');
                                if (del.id === album.userId && album.userId === photo.albumId) {
                                    let photoAll = document.createElement('img');
                                    photoAll.src = photo.url;
                                    photoGenDiv.append(photoAll);
                                }
                            })
                        })


                }
            })
        })

    let postBodyDiv = document.querySelector('#su_post');
    fetch(APIpost)
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(post => {
                if (del.id === post.userId) {
                    console.log(post);
                    let postDiv = document.createElement('div');
                    postDiv.classList = 'card p-4';
                    postBodyDiv.append(postDiv);
                    let postTitle = document.createElement('h5');
                    postTitle.className = 'text-uppercase';
                    postTitle.innerText = `${post.title}`
                    postDiv.append(postTitle);
                    let postBody = document.createElement('p');
                    postBody.innerText = `${post.body}`
                    postBody.classList = 'mb-0';
                    postDiv.append(postBody);

                    let open = document.createElement('a');
                    open.setAttribute("data-bs-toggle", "collapse");
                    open.classList = "collapsed my-3";
                    open.href = `#collapse${post.id}`;
                    open.innerText = "Leggi tutti i commenti";
                    postDiv.append(open);
                    let collapseDiv = document.createElement('div');
                    collapseDiv.classList = "collapse row row-cols-1 g-4";
                    collapseDiv.id = `collapse${post.id}`;
                    postDiv.append(collapseDiv);
                    fetch(APIcom)
                        .then((response) => response.json())
                        .then(comArr => {
                            comArr.forEach(com => {
                                if (post.id === com.postId) {
                                    let comDiv = document.createElement('div');
                                    comDiv.classList = "card card-body";
                                    collapseDiv.append(comDiv);
                                    let comUser = document.createElement('p');
                                    comUser.className = "mb-0"
                                    comUser.innerText = `User: ${com.email}`;
                                    comDiv.append(comUser);
                                    let comHr = document.createElement('hr');
                                    comDiv.append(comHr);
                                    let comTitle = document.createElement('h6');
                                    comTitle.classList = "text-uppercase mb-3"
                                    comTitle.innerText = `${com.name}`;
                                    comDiv.append(comTitle);
                                    let comBody = document.createElement('p');
                                    comBody.innerText = `${com.body}`;
                                    comBody.className = "mb-0"
                                    comDiv.append(comBody);


                                }
                            })
                        })
                }
            });
        });
}

let btnPost = document.querySelector('#su_post');
let btnAlbum = document.querySelector('#su_album');
let btnFoto = document.querySelector('#su_photo');

function showAlbum() {
    btnPost.style.display = "none";
    btnAlbum.style.display = "block";
    btnFoto.style.display = "none";
}

function showPost() {
    btnPost.style.display = "block";
    btnAlbum.style.display = "none";
    btnFoto.style.display = "none";
}

function showFoto() {
    btnPost.style.display = "none";
    btnAlbum.style.display = "none";
    btnFoto.style.display = "block";
}

function logOut() {

    sessionStorage.clear();
  
  }