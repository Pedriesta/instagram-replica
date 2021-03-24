import {NavbarController} from './Controller/Navbar.js';
import {VideoController} from './Controller/Video.js';

import {NavbarView} from './View/Navbar.js';
import {VideoView} from './View/Video.js';

import {NavbarModel} from './Model/Navbar.js';
import {VideoModel} from './Model/Video.js';

(async function(){
    let navBarApp = new NavbarController(new NavbarModel(), new NavbarView());
    let videoApp = new VideoController(new VideoModel(), new VideoView());
    navBarApp.init();
    videoApp.init();
})();