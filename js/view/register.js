export default class Register_View {
    constructor() {
      this.nameInput = document.getElementById('nameReg');
      this.emailInput = document.getElementById('emailReg');
      this.passwordInput = document.getElementById('passwordReg');
      this.cityInput = document.getElementById('cityReg');
      this.countryInput = document.getElementById('countryReg');
      this.sexInput = document.getElementById('sexReg');
      this.aboutInput = document.getElementById('aboutReg');
      this.registerButton = document.getElementById('registerReg');
      
      this.registerButton.addEventListener('click', () => {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const city = this.cityInput.value;
        const selectedOption = this.countryInput.selectedOptions[0];
        const country = selectedOption.textContent;
        const selectedSexOption = this.sexInput.selectedOptions[0];
        const sex = selectedSexOption.textContent;
        const about = this.aboutInput.value;
        this.onRegister(name, email, password, city, country, sex, about);
      });
    }
  }
  