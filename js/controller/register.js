import Message_View from '../view/messages.js';

export default class Register_Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
      
        this.view.onRegister = (name, email, password, city, country, sex, about) => {
            this.onRegister(name, email, password, city, country, sex, about);
        };
    }

    onRegister(name, email, password, city, country, sex, about)
    {
        try {
            this.model.setData(name, email, city, country, sex, about);
            this.model.setPassword(password);
            this.model.validate();
            this.model.saveData();
            window.location = '/WEB-labs/index.html';
            new Message_View().showSuccessMessage('Користувача успішно зареєстровано!'); 
        } catch (error) {
            new Message_View().showErrorMessage(error.message);
        }
    }
}
  
