class Character {
    constructor(name, species, image) {
      this._name = name;
      this._species = species;
      this._image = image;
    }
  

    get name() {
      return this._name;
    }
  
    get species() {
      return this._species;
    }
  
    get image() {
      return this._image;
    }
  

    show() {
        const cardContainer = document.getElementById('character-container');
        const card = document.createElement('div');
        card.classList.add('card');
      
        const image = document.createElement('img');
        image.src = this._image;
        image.alt = this._name;
        image.classList.add('card-img-top');
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
      
        const name = document.createElement('h5');
        name.classList.add('card-title');
        name.textContent = this._name;
      
        const species = document.createElement('p');
        species.classList.add('card-text');
        species.textContent = this._species;
      
        cardBody.appendChild(name);
        cardBody.appendChild(species);
      
        card.appendChild(image);
        card.appendChild(cardBody);
      
        cardContainer.appendChild(card);
      }
  }
  
  function getCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
  
        characters.forEach(characterData => {
          const { name, species, image } = characterData;
          const character = new Character(name, species, image);
          character.show();
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  getCharacters();