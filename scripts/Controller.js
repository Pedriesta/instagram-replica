import {eventHandlers} from './ControllerEventHandler.js';
class Controller{
    contructor(model, view){
        this.model = model;
        this.view = view;
    }

    toggleFollow = eventHandlers.toggleFollow;
    toggleLike = eventHandlers.toggleLike;
    viewImages = eventhandlers.viewImages;
    viewVideos = eventHandlers.viewVideos;
    changePageViewVideo = eventHandlers.changePageViewVideo;
    loadVideo = eventHandlers.loadVideo;
    
    
}