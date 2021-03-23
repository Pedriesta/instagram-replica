import {Navbar} from './Components/Navbar.js';
import { domGetElementById } from './DomLayer.js';

class NavbarView{
    constructor(){
        this.controllerEventHandler = {};
    }
    // Main Render Method
    render(data){
        this.parent = domGetElementById("navbar");
        this.navbar = new Navbar(data.getProfilePicture());
        this.parent.appendChild(this.navbar);
    }

}

export{NavbarView};