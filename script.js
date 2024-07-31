const mainContainer = document.getElementById("main");
const playlists = data.playlists;

for (i=0; i< playlists.length; i++){  
  let cardDiv = document.createElement('div');
  let cardP = document.createElement('p');
  let cardH4 = document.createElement('h4');
  let cardImg = document.createElement('img');
  let cardLikes = document.createElement('p');
  let songButton = document.createElement('button');
  
  cardDiv.setAttribute('class','card');
  cardImg.setAttribute('src', playlists[i]['playlist_art'])
  songButton.setAttribute('onclick', `openmodal(${playlists[i].songs})`)
  
  cardH4.innerText = playlists[i]['playlist_name'];
  cardP.innerText = playlists[i]['playlist_creator'];
  cardLikes.innerText = playlists[i]['likeCount'] + ' ♥️';
  songButton.innerText = 'view songs';

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardH4);
  cardDiv.appendChild(cardP);
  cardDiv.appendChild(songButton);
  cardDiv.appendChild(cardLikes);
  
  mainContainer.appendChild(cardDiv);
}