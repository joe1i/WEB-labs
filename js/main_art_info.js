import ArtInfo_Model from './model/art_info.js';
import ArtInfo_View from './view/art_info.js';
import ArtInfo_Controller from './controller/art_info.js';

const model = new ArtInfo_Model();
const view = new ArtInfo_View();
const controller = new ArtInfo_Controller(model, view);
controller.init();