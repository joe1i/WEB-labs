import ArtsList_Model from './model/arts_list.js';
import ArtsList_View from './view/arts_list.js';
import ArtsList_Controller from './controller/arts_list.js';

const model = new ArtsList_Model();
const view = new ArtsList_View();
const controller = new ArtsList_Controller(model, view);
controller.init();