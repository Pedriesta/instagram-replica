import { ids} from '../../Registry.js';
import { domGetElementById} from '../DomLayer.js';
import {ImageWrapper} from './PostImage.js';
import {VideoWrapper} from './PostVideo.js';

class ImageGrid{
    constructor(images, controllerEventHandlers){
        this.imageGrid = domGetElementById(ids.IMAGE_GRID);
        this.loadImages(images);

        //eventListener common for onClick on likeIcons
        this.imageGrid.addEventListener('click', (e)=>{
            const imageWrapper = e.target.parentNode.parentNode;
            const id = imageWrapper.dataset.id;
            controllerEventHandlers.toggleLike(id);
        });
    }
    loadImages(images){
        images.forEach((image, i) => {
            const imageContainer = new ImageWrapper(image);
            this.imageGrid.appendChild(imageContainer);
        });
    }
}

class VideoGrid{
    constructor(videos, controllerEventHandlers){
        this.videoGrid = domGetElementById(ids.VIDEO_GRID);
        this.loadVideos(videos, controllerEventHandlers);

        //eventListener common for onClick on likeIcons
        this.videoGrid.addEventListener('click', (e)=>{
            const videoWrapper = e.target.parentNode.parentNode;
            const id = videoWrapper.dataset.id;
            controllerEventHandlers.toggleLike(id);
        });
    }
    loadVideos(videos){
        videos.forEach((video, i) => {
            const videoContainer = new VideoWrapper(video);
            this.videoGrid.appendChild(videoContainer);
        });
    }
}

export{ImageGrid, VideoGrid};