import {ProfilePicture} from './Components/ProfilePicture.js';
import {domGetElementById} from './DomLayer.js';
class ProfilePictureView{
    constructor(){
        this.controllerEventHandlers = {};
    }
    // Main Render Method
    render(data){
        this.profilePicture = new ProfilePicture(data.getProfilePicture());
    }

}

export{ProfilePictureView};