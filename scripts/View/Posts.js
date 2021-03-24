import {viewEventHandlers} from './ViewEventHandler.js'
import {ImageGrid, VideoGrid} from './Components/PostsGrid.js';
import {domGetElementById} from './DomLayer.js';
import {ids} from '../Registry.js';

class PostsView{
    constructor(){
        this.controllerEventHandlers = {};
    }

    // attach eventHandlers from the ViewEventHandler File
    toggleLike = viewEventHandlers.toggleLike;
    editLikeCount = viewEventHandlers.editLikeCount;
    viewImages = viewEventHandlers.viewImages;
    viewVideos = viewEventHandlers.viewVideos;
    loadVideo = viewEventHandlers.loadVideo;
    changePageViewVideo = viewEventHandlers.changePageViewVideo;


    // Main Render Method
    render(data){
        this.imageGrid = new ImageGrid(data.getImages(), this.controllerEventHandler);
        this.videoGrid = new VideoGrid(data.getVideos(), this.controllerEventHandler);
    }

    // Attach Event Listener to Static Elements FOLLOW_BUTTON, IMAGE_TAB and VIDEO_TAB
    attachEventListenersStaticElements(){
        domGetElementById(ids.IMAGE_TAB).addEventListener("click", this.controllerEventHandler.viewImages);
        domGetElementById(ids.VIDEO_TAB).addEventListener("click", this.controllerEventHandler.viewVideos);
    };

}

export{PostsView};