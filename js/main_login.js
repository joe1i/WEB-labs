import Login_Model from './model/login.js';
import Login_View from './view/login.js';
import Login_Controller from './controller/login.js';

let model = new Login_Model();
let view = new Login_View();
let controller = new Login_Controller(model, view);