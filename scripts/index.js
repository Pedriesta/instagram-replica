import {PostsModel} from './Model/Posts.js';
import {ProfileContentModel} from './Model/ProfileContent.js';
import {ProfilePictureModel} from './Model/ProfilePicture.js';
import { NavbarModel } from './Model/Navbar.js';

import {PostsView} from './View/Posts.js';
import {ProfileContentView} from './View/ProfileContent.js';
import {ProfilePictureView} from './View/ProfilePicture.js';
import { NavbarView } from './View/Navbar.js';

import {PostsController} from './Controller/Posts.js';
import {ProfileContentController} from './Controller/ProfileContent.js';
import {ProfilePictureController} from './Controller/ProfilePicture.js';
import { NavbarController } from './Controller/Navbar.js';

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