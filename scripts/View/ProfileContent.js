import {viewEventHandlers} from './ViewEventHandler.js'
import { ProfileContent} from './Components/ProfileContentGenerator.js';
import {domGetElementById} from './DomLayer.js';
import {ids} from '../Registry.js';

class ProfileContentView{
    constructor(){
        this.controllerEventHandlers = {};
    }

    // attach eventHandlers from the ViewEventHandler File
    toggleFollow = viewEventHandlers.toggleFollow;
    editFollowerCount = viewEventHandlers.editFollowerCount;

    // Main Render Method
    render(data){
        const userInfo = {
            name : data.getName(),
            numberOfPosts : data.getNumberOfPosts(),
            followers : data.getNumberOfFollowers(),
            following : data.getNumberOfFollowing(),
            bio : data.getBio(),
        }
        const profileContent = new ProfileContent(userInfo, data.isFollowed(), this.controllerEventHandlers.toggleFollow);
        const profile = domGetElementById(ids.PROFILE);
        profile.removeChild(profile.childNodes[2]);
        profile.appendChild(profileContent)
    }

}

export{ProfileContentView};