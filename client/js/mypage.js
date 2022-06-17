const APIpost = "http://localhost:3000/api/pst/";
const APIcom = "http://localhost:3000/api/comment/";
const APIalbum = "http://localhost:3000/api/album/";
const APIphoto = "http://localhost:3000/api/photo/";

document.addEventListener("DOMContentLoaded", function () {
    detailUser();
});

function detailUser() {
    var userlog = JSON.parse(sessionStorage.getItem('login'));
    let SUdiv = document.querySelector('#single_user');
    let details = document.querySelector('#single_user_details');
    fetch(APIphoto) 
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(photo => {
                if (userlog.id === photo.id) {
                    let profImg = document.createElement('img');
                    profImg.classList = 'rounded-circle me-3';
                    profImg.src = photo.thumbnailUrl;
                    SUdiv.append(profImg);
                }
            })
            let uName = document.createElement('h1');
            uName.innerText = `${userlog.name}`
            SUdiv.appendChild(uName);
            let website = document.createElement('p');
            website.innerHTML = `<p> Website: ${userlog.website}</p>
                                 <a class="nav-link" href="login.html"><button type="button" onclick="removeAccount(${userlog.id})" class="btn btn-danger btn-sm">Delete Account</button></a>`
            details.append(website);
            // let company = document.createElement('p');
            // company.innerText = `${del.companyname}`
            // company.appendChild(company);
        })
    }


    function logOut() {

        sessionStorage.clear();

    }

    function removeAccount(id) {
        alert("Account Deleted!");
        sessionStorage.clear();
        fetch(urlAPI+id, {method: 'DELETE'}).then(response => response.text()).then(json => {
        window.location = "http://127.0.0.1:5500/client/login.html";
        })
        
        
      }