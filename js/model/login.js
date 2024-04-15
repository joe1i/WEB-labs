export default class Login_Model {

    constructor() {
        this.email = localStorage.getItem('emailLog') || '';
        this.password = localStorage.getItem('passwordLog') || '';
        this.remember = localStorage.getItem('rememberLog') || false;
    }

    setData(email, password, remember) {
        this.email = email;
        this.password = password;
        this.remember = remember;
      }
  
    validate() {
        if (!this.email || !this.password) {
            throw new Error('Всі поля є обов\'язковими');
        }
    
        if (!this.email.trim()) {
            throw new Error('Електронна пошта не може бути порожньою');
        }
    
        if (!this.password.trim()) {
            throw new Error('Пароль не може бути порожнім');
        }

        if (!this.email.match(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}$/)) {
            throw new Error('Неправильний формат електронної пошти');
        }

        // перевірка пошти в базі
    
        if (this.password.length < 6) {
            throw new Error('Пароль повинен містити 6 або більше символів');
        }
        
        // перевірка паролю в базі

        if(this.remember){
            this.saveData();
        }
        else{
            this.clearData();
        }
     

    }

    saveData(){
        localStorage.setItem('emailLog', this.email);
        localStorage.setItem('passwordLog', this.password);
        localStorage.setItem('rememberLog', this.remember);
    }

    clearData(){
        localStorage.removeItem('emailLog');
        localStorage.removeItem('passwordLog');
        localStorage.removeItem('rememberLog');
        localStorage.removeItem('artworksCollection');
    }

    getMyData() {
        return { email: this.email, password: this.password, remember: this.remember};
    }
  }
  