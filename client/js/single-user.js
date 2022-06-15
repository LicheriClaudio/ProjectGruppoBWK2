const APIpost = "http://localhost:3000/api/pst/";

document.addEventListener("DOMContentLoaded", function () {
    detailUser();
});

function detailUser() {
    var del = JSON.parse(sessionStorage.getItem('user'));
    let SUdiv = document.querySelector('#single_user');
    let uName = document.createElement('h1');
    uName.innerText = `${del.name}`
    SUdiv.appendChild(uName);
    fetch(APIpost)
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(post => {
                if (del.id === post.userId) {
                    console.log(post);
                    let postDiv = document.createElement('div');
                    SUdiv.append(postDiv);
                    let postTitle = document.createElement('h3');
                    postTitle.className = 'text-uppercase';
                    postTitle.innerText = `${post.title}`
                    postDiv.append(postTitle);
                    let postBody = document.createElement('p');
                    postBody.innerText = `${post.body}`
                    postDiv.append(postBody);

                }
            });
        });
}