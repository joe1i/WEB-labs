import Message_View from '../view/messages.js';

export default class ArtsInfo_Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onBuy = () => {
            this.onBuy();
        };
    }

    onBuy()
    {
        try {
            this.model.buyArtwork();
            window.location = '/WEB-labs/index.html';
            new Message_View().showSuccessMessage('Покупку виконано успішно!');
        } catch (error) {
            new Message_View().showErrorMessage(error.message);
        }
    }

    init() {
        try {
            this.model.setArtwork();
            this.view.displayArtwork(this.model.getArtwork());
        } catch (error) {
            new Message_View().showErrorMessage(error.message);
        }
    }
}
