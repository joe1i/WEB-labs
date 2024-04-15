export default class ArtsList_View {
    constructor() {
        this.columns = document.querySelectorAll('.gallery .row .col');
        this.currentIndex = 0;
    }

    displayArtwork(artwork) {
        const currentColumn = this.columns[this.currentIndex];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${artwork.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${artwork.name}</h5>
                <p class="card-text">${artwork.author}</p>
                <a class="btn btn-itd buy-button" data-artwork='${JSON.stringify(artwork)}' id="buyMain">${artwork.price}</a>
            </div>
        `;
        currentColumn.appendChild(card);
        this.currentIndex = (this.currentIndex + 1) % this.columns.length;
    }

    
}
