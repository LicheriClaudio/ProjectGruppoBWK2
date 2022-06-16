
function currentUer() {

    let list = document.querySelector('#myPage');
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    
    
    fetch(APIusers)
      .then((response) => response.json())
      .then((usersArr) => {
  
        /* printTableUser(json); */
        /* console.log(users); */
  
        usersArr.forEach(user => {
          let currentEmail = document.querySelector(".currentUser").innerHTML;
          if (user.email === currentEmail) {
  
  
            let a = document.querySelector('#myPage');
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
  
  