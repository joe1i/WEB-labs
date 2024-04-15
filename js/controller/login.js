import Message_View from '../view/messages.js';

export default class Login_Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.setSavedData(this.model.getMyData());
      
        this.view.onLogin = (email, password, remember) => {
            this.onLogin(email, password, remember);
        };
    }

    onLogin(email, password, remember)
    {
        try {
            this.model.setData(email, password, remember);
            this.model.validate();

            window.location = '/index.html'
            
            new Message_View().showSuccessMessage('Вхід виконано успішно!');
        } catch (error) {
            new Message_View().showErrorMessage(error.message);
            }
    }
  }
  