import {ProfilePicture} from './Components/ProfilePicture.js';

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