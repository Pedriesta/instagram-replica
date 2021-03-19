// import {fillData} from './Generator.js';
import {Model} from './Model.js';
import {View} from './View.js';
import {Controller} from './Controller.js';

//initialise view model and controller
// call model.init before doing anything else
// view.render
// wrapped uop in wrapped up in  an async function

(async function(){
    let model = new Model();
    let view = new View();
    let app = new Controller(model, view);
    await app.model.init();
    app.view.render(model);
    app.view.attachEventListenersStaticElements();
})();