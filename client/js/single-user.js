const APIpost = "http://localhost:3000/api/pst/";
const APIcom = "http://localhost:3000/api/comment/";
const APIalbum = "http://localhost:3000/api/album/";
const APIphoto = "http://localhost:3000/api/photo/";

document.addEventListener("DOMContentLoaded", function () {
    detailUser();
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