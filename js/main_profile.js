import Profile_Model from './model/profile.js';
import Profile_View from './view/profile.js';
import Profile_Controller from './controller/profile.js';

const model = new Profile_Model();
const view = new Profile_View();
const controller = new Profile_Controller(model, view);