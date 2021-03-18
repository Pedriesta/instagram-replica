import {viewEventHandlers} from './ViewEventHandler.js'

class View{
    constructor(){

    }

    toggleFollow = viewEventHandlers.toggleFollow;
    toggleLike = viewEventHandlers.toggleLike;
    editLikeCount = viewEventHandlers.editLikeCount;
    editFollowerCount = viewEventHandlers.editFollowerCount;
    viewImages = viewEventHandlers.viewImages;
    viewVideos = viewEventHandlers.viewVideos;
    loadVideo = viewEventHandlers.loadVideo;
    changePageViewVideo = viewEventHandlers.changePageViewVideo;

}