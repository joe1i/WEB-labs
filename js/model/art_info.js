export default class ArtInfo_Model {
    setArtwork() {
        this.artwork = JSON.parse(localStorage.getItem('selectedArt'));
        if (!this.artwork) {
            throw new Error('Обраний мистецький твір не завантажився!');
          }
    }

    buyArtwork() {
        this.checkRegister();
        let artworks = JSON.parse(localStorage.getItem('artworksCollection')) || [];
        artworks.unshift(this.artwork);
        localStorage.setItem('artworksCollection', JSON.stringify(artworks));
    }
    
    checkRegister()
    {
        var email = localStorage.getItem('emailProf');
        if (!email) {
            throw new Error('Ви не зареєстровані!');
          }
    }

    getArtwork() {
        return this.artwork;
    }
}