import {viewEventHandlers} from './ViewEventHandler.js'
import { profileContentGenerator} from './Components/ProfileContentGenerator.js';
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
        profileContentGenerator(userInfo, this.controllerEventHandler);
    }

    // Attach Event Listener to Static Elements FOLLOW_BUTTON, IMAGE_TAB and VIDEO_TAB
    attachEventListenersStaticElements(){
        domGetElementById(ids.FOLLOW_BUTTON).addEventListener("click", this.controllerEventHandler.toggleFollow);
    };

}

export{ProfileContentView};