import {PostsModel} from './Model/Posts.js';
import {ProfileContentModel} from './Model/ProfileContent.js';
import {ProfilePictureModel} from './Model/ProfilePicture.js';
import { NavbarModel } from './Model/Navbar.js';
// import {Model} from './Model/Model.js';

import {PostsView} from './View/Posts.js';
import {ProfileContentView} from './View/ProfileContent.js';
import {ProfilePictureView} from './View/ProfilePicture.js';
import { NavbarView } from './View/Navbar.js';
// import {Controller} from './Controller/Controller.js';


import {PostsController} from './Controller/Posts.js';
import {ProfileContentController} from './Controller/ProfileContent.js';
import {ProfilePictureController} from './Controller/ProfilePicture.js';
import { NavbarController } from './Controller/Navbar.js';
// import {View} from './View/View.js';




// (async function(){
//     let model = new Model();
//     let view = new View();
//     let app = new Controller(model, view);
//     app.init();
// })();

(async function(){
    let navBarApp = new NavbarController(new NavbarModel(), new NavbarView());
    let postApp = new PostsController(new PostsModel(), new PostsView());
    let profileContentApp = new ProfileContentController(new ProfileContentModel(), new ProfileContentView());
    let profilePictureApp = new ProfilePictureController(new ProfilePictureModel(), new ProfilePictureView());
    navBarApp.init();
    postApp.init();
    profileContentApp.init();
    profilePictureApp.init();
})();