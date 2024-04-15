export default class Login_View {
    constructor() {
      this.emailInput = document.getElementById('emailLog');
      this.passwordInput = document.getElementById('passwordLog');
      this.loginButton = document.getElementById('loginLog');
      this.rememberCheckBox = document.getElementById('rememberLog');
      
      this.loginButton.addEventListener('click', () => {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const remember = this.rememberCheckBox.checked;
        this.onLogin(email, password, remember);
      });
    }

    setSavedData(data) {
        this.emailInput.value = data.email;
        this.passwordInput.value = data.password;
        this.rememberCheckBox.checked = data.remember;
    }
  
  }
  