export default class Profile_View {
    constructor() {
      this.nameInput = document.getElementById('nameProf');
      this.emailInput = document.getElementById('emailProf');
      this.cityInput = document.getElementById('cityProf');
      this.countryInput = document.getElementById('countryProf');
      this.sexInput = document.getElementById('sexProf');
      this.aboutInput = document.getElementById('aboutProf');
      this.saveButton = document.getElementById('saveProf');
      this.collection = document.querySelector('.mycollection .row');
      
      this.saveButton.addEventListener('click', () => {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const city = this.cityInput.value;
        const selectedOption = this.countryInput.selectedOptions[0];
        const country = selectedOption.textContent;
        const selectedSexOption = this.sexInput.selectedOptions[0];
        const sex = selectedSexOption.textContent;
        const about = this.aboutInput.value;
        this.onSave(name, email, city, country, sex, about);
      });
    }

    setSavedData(data) {
        this.nameInput.value = data.name;
        this.emailInput.value = data.email;
        this.aboutInput.value = data.about;
        this.cityInput.value = data.city;

        const optionToSelect = Array.from(this.countryInput.options).find(option => option.textContent === data.country);
        if (optionToSelect) {
          optionToSelect.selected = true;
        } 

        const optionSexToSelect = Array.from(this.sexInput.options).find(option => option.textContent === data.sex);
        if (optionSexToSelect) {
          optionSexToSelect.selected = true;
        } 


    }

    displayArtwork(artwork) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${artwork.image}" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title">${artwork.name}</h5>
              <p class="card-text">${artwork.author}</p>
          </div>
      `;
      this.collection.appendChild(card);
    }
  }
  