import {Model} from './Model/Model.js';
import {View} from './View/View.js';
import {Controller} from './Controller/Controller.js';


(async function(){
    let model = new Model();
    let view = new View();
    let app = new Controller(model, view);
    app.init();
})();