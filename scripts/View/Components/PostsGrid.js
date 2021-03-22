import { ids} from '../../Registry.js';
import { domGetElementById} from '../DomLayer.js';
import {ImageWrapper} from './PostImage.js';
import {VideoWrapper} from './PostVideo.js';

class ImageGrid{
    constructor(images, controllerEventHandlers){
        this.imageGrid = domGetElementById(ids.IMAGE_GRID);
        this.loadImages(images, controllerEventHandlers);
    }
    loadImages(images, controllerEventHandlers){
        images.forEach((image, i) => {
            const imageContainer = new ImageWrapper(image, controllerEventHandlers);
            this.imageGrid.appendChild(imageContainer);
        });
    }
}

class VideoGrid{
    constructor(videos, controllerEventHandlers){
        this.videoGrid = domGetElementById(ids.VIDEO_GRID);
        this.loadVideos(videos, controllerEventHandlers);
    }
    loadVideos(videos, controllerEventHandlers){
        videos.forEach((video, i) => {
            const videoContainer = new VideoWrapper(video, controllerEventHandlers);
            this.videoGrid.appendChild(videoContainer);
        });
    }
}

export{ImageGrid, VideoGrid};