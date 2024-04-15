import Message_View from '../view/messages.js';

export default class Profile_Controller {
    constructor(model, view) {
        this.model = model;
        this.model.loadData();
        this.view = view;

        this.view.setSavedData(this.model.getMyData());

        this.model.getArtworks().forEach(artwork => {
            this.view.displayArtwork(artwork);
        });
      
        this.view.onSave = (name, email, city, country, sex, about) => {
            this.onSave(name, email, city, country, sex, about)
        };

    }

    onSave(name, email, city, country, sex, about)
    {
        try {
            this.model.setData(name, email, city, country, sex, about);
            this.model.validateMainInfo();
            this.model.saveData();
            new Message_View().showSuccessMessage('Зміни збережено!');
        } catch (error) {
            new Message_View().showErrorMessage(error.message);
        }
    }
}
  