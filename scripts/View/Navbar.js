import { ids } from '../Registry.js';
import {Navbar} from './Components/Navbar.js';
import { domGetElementById } from './DomLayer.js';

class NavbarView{
    constructor(){
        this.controllerEventHandlers = {};
    }
    // Main Render Method
    render(data){
        const header = domGetElementById(ids.HEADER);
        this.navbar = new Navbar(data.getProfilePicture());
        header.appendChild(this.navbar);
    }
}

export{NavbarView};