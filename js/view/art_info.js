export default class ArtInfo_View {
    constructor() {
        this.name = document.getElementById('nameInfo');
        this.genre = document.getElementById('genreInfo');
        this.image = document.getElementById('imageInfo');
        this.author = document.getElementById('authorInfo');
        this.buyButton = document.getElementById('buyInfo');

        this.buyButton.addEventListener('click', () => {
            this.onBuy();
          });
    }

    displayArtwork(artwork) {
        this.name.innerHTML  = artwork.name;
        this.author.innerHTML  = "Автор: " + artwork.author;
        this.image.src  = artwork.image;
        this.buyButton.innerHTML = "Купити за " + artwork.price;
    }
}