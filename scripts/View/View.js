import {viewEventHandlers} from './ViewEventHandler.js'
import {postsGridGenerator} from './PostsGridGenerator.js';
import {profilePictureGenerator} from './ProfilePictureGenerator.js';
import { profileContentGenerator} from './ProfileContentGenerator.js';
import {domGetElementById} from './DomLayer.js';
import {ids} from '../Registry.js';

class View{
    constructor(){
        this.controllerEventHandler = {};
    }

    // attach eventHandlers from the ViewEventHandler File
    toggleFollow = viewEventHandlers.toggleFollow;
    toggleLike = viewEventHandlers.toggleLike;
    editLikeCount = viewEventHandlers.editLikeCount;
    editFollowerCount = viewEventHandlers.editFollowerCount;
    viewImages = viewEventHandlers.viewImages;
    viewVideos = viewEventHandlers.viewVideos;
    loadVideo = viewEventHandlers.loadVideo;
    changePageViewVideo = viewEventHandlers.changePageViewVideo;


    // Main Render Method
    render(data){
        postsGridGenerator.loadImages(data.getImages(), this.controllerEventHandler);
        postsGridGenerator.loadVideos(data.getVideos(), this.controllerEventHandler);
        profilePictureGenerator(data.getProfilePicture(), this.controllerEventHandler);

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
        domGetElementById(ids.IMAGE_TAB).addEventListener("click", this.controllerEventHandler.viewImages);
        domGetElementById(ids.VIDEO_TAB).addEventListener("click", this.controllerEventHandler.viewVideos);
    };

}

export{View};