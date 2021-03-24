import { ids, classes, state, icons} from '../../Registry.js';
import { domGetElementById, domEditElementById} from '../DomLayer.js';
import {ImageWrapper} from './PostImage.js';
import {VideoWrapper} from './PostVideo.js';

class ImageGrid{
    constructor(images, controllerEventHandlers, showGrid){

        const imageGridOld = domGetElementById(ids.IMAGE_GRID);
        const imageGridNew = imageGridOld.cloneNode(true);

        imageGridNew.innerHTML = '';
        this.imageGrid = imageGridNew;
        this.loadImages(images);
        showOrHideGrid(showGrid, this.imageGrid);
        toggleImageGridIcon(showGrid);
        //eventListener common for onClick on likeIcons
        imageGridNew.addEventListener('click', (e)=>{
            const imageWrapper = e.target.parentNode.parentNode;
            const id = imageWrapper.dataset.id;
            controllerEventHandlers.toggleLike(id);
        });

        imageGridOld.parentNode.replaceChild(imageGridNew, imageGridOld);
        // this.imageGrid.get

    }
    loadImages(images){
        images.forEach((image, i) => {
            const imageContainer = new ImageWrapper(image);
            this.imageGrid.appendChild(imageContainer);
        });
    }
}

class VideoGrid{
    constructor(videos, controllerEventHandlers, showGrid){
        const videoGridOld = domGetElementById(ids.VIDEO_GRID);
        const videoGridNew = videoGridOld.cloneNode(true);


        videoGridNew.innerHTML = '';
        this.videoGrid = videoGridNew;
        this.loadVideos(videos);
        showOrHideGrid(showGrid, this.videoGrid);
        toggleVideoGridIcon(showGrid);
        //eventListener common for onClick on likeIcons
        this.videoGrid.addEventListener('click', (e)=>{
            const videoWrapper = e.target.parentNode.parentNode;
            const id = videoWrapper.dataset.id;
            controllerEventHandlers.toggleLike(id);
        });

        videoGridOld.parentNode.replaceChild(videoGridNew, videoGridOld);

    }
    loadVideos(videos, controllerEventHandlers){
        videos.forEach((video, i) => {
            const videoContainer = new VideoWrapper(video, controllerEventHandlers);
            this.videoGrid.appendChild(videoContainer);
        });
    }
}

function showOrHideGrid(showGrid, gridElementObject){
    if(showGrid){
        gridElementObject.classList.remove(classes.HIDE_GRID);
        gridElementObject.classList.add(classes.SHOW_GRID);
    }
    else{
        gridElementObject.classList.remove(classes.SHOW_GRID);
        gridElementObject.classList.add(classes.HIDE_GRID);
    }
}

function toggleVideoGridIcon(isGridActive){
    if(isGridActive){
        domGetElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_ON);
        domEditElementById({
            id : ids.VIDEO_TAB,
            style : {
                fontWeight : "bold",
                borderTop : "1px solid black"
            }
        });
    }
    else{
        domGetElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_OFF);
        domEditElementById({
            id : ids.VIDEO_TAB,
            style : {
                fontWeight : "normal",
                borderTop : "none"
            }
        });
    }
}

function toggleImageGridIcon(isGridActive){
    if(isGridActive){
        domGetElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_ON);
        domEditElementById({
            id : ids.IMAGE_TAB,
            style : {
                fontWeight : "bold",
                borderTop : "1px solid black"
            }
        });
    }
    else{
        domGetElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_OFF);
        domEditElementById({
            id : ids.IMAGE_TAB,
            style : {
                fontWeight : "normal",
                borderTop : "none"
            }
        });
    }
}

export{ImageGrid, VideoGrid};