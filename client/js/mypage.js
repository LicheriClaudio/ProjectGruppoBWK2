const APIpost = "http://localhost:3000/api/pst/";
const APIcom = "http://localhost:3000/api/comment/";
const APIalbum = "http://localhost:3000/api/album/";
const APIphoto = "http://localhost:3000/api/photo/";
const APIusers = "http://localhost:3000/api/users/";

document.addEventListener("DOMContentLoaded", function () {
    detailUser();
});

function detailUser() {
    var userlog = JSON.parse(sessionStorage.getItem('login'));
    let SUdiv = document.querySelector('#single_user');
    let details = document.querySelector('#single_user_details');
    let welcome = document.querySelector('#welcome');
    let myPagePosts = document.querySelector('#myPagePosts');
    let myPageComments = document.querySelector('#myPageComments');
    // console.log(matchID(1));
    // function matchID(id) {
    //     fetch(APIusers) 
    //     .then((response) => response.json())
    //     .then(postArr => {
    //         postArr.forEach(user => {
                
    //             if(id === user.id) {
    //                 console.log(user.name);
    //                 return typeof(user.name);
    //             // } else {
                   
    //             //     return 'Unknown';
                    
    //              }
                
    //         }) 

            
    //     })
    // }
   
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
        })
    fetch(APIcom) 
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(com => {
                // if (userlog.id === com.id) {
                    let comments = document.createElement('div');
                    fetch(APIusers) 
                        .then((response) => response.json())
                        .then(postArr => {
                            postArr.forEach(user => {
                                
                                if(com.postId === user.id) {
                    // profImg.classList = 'rounded-circle me-3';
                    comments.innerHTML = `<h3>${user.name}</h3>
                                      <p>"${com.body}"</p>`
                    myPageComments.append(comments);
                 }
      
             })
        })
    })
    })
    fetch(APIpost) 
        .then((response) => response.json())
        .then(postArr => {
            postArr.forEach(post => {
                // if (userlog.id === post.id) {
                    let posts = document.createElement('div');
                    fetch(APIusers) 
                        .then((response) => response.json())
                        .then(postArr => {
                            postArr.forEach(user => {
                                
                                if(post.userId === user.id) {
                    // profImg.classList = 'rounded-circle me-3';
                    posts.innerHTML = `<h3>${user.name}</h3>
                                      <p> "${post.body} "</p>`
                    myPagePosts.append(posts);
            }
            })
        })
        })
        })
            let welcomeMessage = document.createElement('div');
            welcomeMessage.innerHTML = `<h1> Welcome to Code Together ${userlog.name}!</h1>
                                 <a class="nav-link" href="Project.html">Click to see your fellow users!</a>`;
                         
            let uName = document.createElement('h1');
            uName.innerText = `${userlog.name}`
            SUdiv.appendChild(uName);
            let website = document.createElement('div');
            website.innerHTML = `
                                <h4> Website:</h4>
                                <p> ${userlog.website}</p>
                                <h4> Company Details:</h4>
                                <p> Name:  ${userlog.company.name}</p>
                                <p> Sectors: ${userlog.company.bs}</p>
                                <h4> Address:</h4>
                                <p> Name:  ${userlog.address.street}, ${userlog.address.suite} </p>
                                <p> Name:  ${userlog.address.city}, ${userlog.address.zipcode}</p>
                               
                                
                                 <button type="button" onclick="removeAccount(${userlog.id})" class="btn btn-danger btn-sm">Delete Account</button>` //<a class="nav-link" href="login.html">
            details.append(website);
            welcome.append(welcomeMessage);     
            // let company = document.createElement('p');
            // company.innerText = `${del.companyname}`
            // company.appendChild(company);
       
   
    }




    function logOut() {

        sessionStorage.clear();

    }

    function removeAccount(id) {
        
        
        fetch(APIusers+id, {method: 'DELETE'}).then(response => response.text()).then(json => {
            console.log(json);
            
        })
        alert("Account Deleted!");
        
        sessionStorage.clear();
        window.location = "http://127.0.0.1:5500/client/login.html";
        
      }