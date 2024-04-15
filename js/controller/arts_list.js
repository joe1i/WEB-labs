
export default class ArtsList_Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.model.addArtwork({ name: 'From Captivity 1', author: 'Данило Кухта', price: '100$', image: 'img/arts/art1.png' });
        this.model.addArtwork({ name: 'From Captivity 2', author: 'Данило Кухта', price: '120$', image: 'img/arts/art2.png' });
        this.model.addArtwork({ name: 'From Captivity 3', author: 'Данило Кухта', price: '160$', image: 'img/arts/art3.png' });
        this.model.addArtwork({ name: 'From Captivity 4', author: 'Данило Кухта', price: '180$', image: 'img/arts/art4.png' });
        this.model.addArtwork({ name: 'From Captivity 5', author: 'Данило Кухта', price: '80$', image: 'img/arts/art5.png' });
        this.model.addArtwork({ name: 'From Captivity 6', author: 'Данило Кухта', price: '425$', image: 'img/arts/art6.png' });
        this.model.addArtwork({ name: 'From Captivity 7', author: 'Данило Кухта', price: '175$', image: 'img/arts/art8.png' });
        this.model.addArtwork({ name: 'From Captivity 8', author: 'Данило Кухта', price: '65$', image: 'img/arts/art10.png' });
        this.model.addArtwork({ name: 'From Captivity 9', author: 'Данило Кухта', price: '140$', image: 'img/arts/art1.png' });
        this.model.addArtwork({ name: 'From Captivity 10', author: 'Данило Кухта', price: '320$', image: 'img/arts/art11.png' });

        this.model.getArtworks().forEach(artwork => {
            this.view.displayArtwork(artwork);
        });

        this.model.bindBuyButtonEvents();
    }
}
