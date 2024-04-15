export default class ArtsList_Model {
    constructor() {
        this.artworks = [];
    }

    addArtwork(artwork) {
        this.artworks.push(artwork);
    }

    getArtworks() {
        return this.artworks;
    }

    bindBuyButtonEvents() {
        const buyButtons = document.querySelectorAll('.buy-button');
        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.addToLocalStorage(JSON.parse(button.dataset.artwork));
            });
        });
    }

    addToLocalStorage(artwork) {
        localStorage.setItem('selectedArt', JSON.stringify(artwork));        
        window.location = '/WEB-labs/art_info.html';
    }
}
