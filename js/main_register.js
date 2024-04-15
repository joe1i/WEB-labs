import Profile_Model from './model/profile.js';
import Register_View from './view/register.js';
import Register_Controller from './controller/register.js';

let model = new Profile_Model();
let view = new Register_View();
let controller = new Register_Controller(model, view);