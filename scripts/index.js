import {PostsModel} from './Model/Posts.js';
import {ProfileContentModel} from './Model/ProfileContent.js';
import {ProfilePictureModel} from './Model/ProfilePicture.js';
// import {Model} from './Model/Model.js';

import {PostsView} from './View/Posts.js';
import {ProfileContentView} from './View/ProfileContent.js';
import {ProfilePictureView} from './View/ProfilePicture.js';
// import {Controller} from './Controller/Controller.js';


import {PostsController} from './Controller/Posts.js';
import {ProfileContentController} from './Controller/ProfileContent.js';
import {ProfilePictureController} from './Controller/ProfilePicture.js';
// import {View} from './View/View.js';




// (async function(){
//     let model = new Model();
//     let view = new View();
//     let app = new Controller(model, view);
//     app.init();
// })();

(async function(){
    let postApp = new PostsController(new PostsModel(), new PostsView());
    let profileContentApp = new ProfileContentController(new ProfileContentModel(), new ProfileContentView());
    let profilePictureApp = new ProfilePictureController(new ProfilePictureModel(), new ProfilePictureView());
    postApp.init();
    profileContentApp.init();
    profilePictureApp.init();
})();