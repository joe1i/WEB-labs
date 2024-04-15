export default class Profile_Model {


    getArtworks() {
        return this.artworks;
    }

    setData(name, email, city, country, sex, about) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.country = country;
        this.sex = sex;
        this.about = about;
    }

    setPassword(password){
        this.password = password;
    }
  
    validate() {
        this.validateMainInfo();
        this.validatePassword();
    }

    validateMainInfo(){
        if (!this.name || !this.email || !this.city || !this.about) {
            throw new Error('Всі поля є обов\'язковими');
        }
    
        if (!this.name.trim()) {
            throw new Error('Ім\'я користувача не може бути порожнім');
        }
    
        if (!this.email.trim()) {
            throw new Error('Електронна пошта не може бути порожньою');
        }

        if (!this.city.trim()) {
            throw new Error('Місто не може бути порожнім');
        }

        if (!this.about.trim()) {
            throw new Error('Інформація про Вас не може бути порожньою');
        }
    
        if (!this.email.match(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}$/)) {
            throw new Error('Неправильний формат електронної пошти');
        }

        if (!this.city.match(/^[a-zA-Z\-\.а-яА-ЯіїЇєЄёЁґҐіІЇЙоОуУУЄЄхХцЦчЧшШщЩьЬюЮяЯ]/)) {
            throw new Error('Неправильний формат міста');
        }
    }

    validatePassword(){

        if (!this.password) {
            throw new Error('Всі поля є обов\'язковими');
        }

        if (!this.password.trim()) {
            throw new Error('Пароль не може бути порожнім');
        }

        if (this.password.length < 6) {
            throw new Error('Пароль повинен містити 6 або більше символів');
        }
    }

    saveData()
    {
        localStorage.setItem('nameProf', this.name);
        localStorage.setItem('emailProf', this.email);
        localStorage.setItem('cityProf', this.city);
        localStorage.setItem('countryProf', this.country);
        localStorage.setItem('sexProf', this.sex);
        localStorage.setItem('aboutProf', this.about);
    }

    loadData()
    {
        this.name = localStorage.getItem('nameProf') || '';
        this.email = localStorage.getItem('emailProf') || '';
        this.city = localStorage.getItem('cityProf') || '';
        this.country = localStorage.getItem('countryProf') || '';
        this.sex = localStorage.getItem('sexProf') || '';
        this.about = localStorage.getItem('aboutProf') || '';

        this.artworks = JSON.parse(localStorage.getItem('artworksCollection')) || [];
    }
    
    getMyData() {
        return {name: this.name, email: this.email, city: this.city, country: this.country, sex:this.sex, about: this.about, artworks: this.artworks};
    }
}
  