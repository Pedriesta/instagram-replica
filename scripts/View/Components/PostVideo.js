import {LikeCommentIconWrapper} from './LikeCommentIconWrapper.js';
import { classes} from '../../Registry.js';
import { domCreateAnchor, domCreateDiv, domCreateVideo} from '../DomLayer.js';

class VideoWrapper{
    constructor(post, controllerEventHandlers){
        this.iconWrapper = new LikeCommentIconWrapper(post, controllerEventHandlers.toggleLike);
        this.video = createVideo(post.videoUrl);
        this.anchorWrapper = domCreateAnchor({
            children : [this.video]
        })
        this.anchorWrapper.addEventListener("click", ()=>{
            controllerEventHandlers.changePageViewVideo(post.videoUrl)
        });

        const videoWrapper = domCreateDiv({
            classes : [classes.POST_WRAPPER],
            children : [this.iconWrapper, this.anchorWrapper]
        });
        videoWrapper.setAttribute("data-id", post.id);

        return videoWrapper;
    }
}

function createVideo(url){
    const video = domCreateVideo({
        classes : [classes.GALLERY_POST],
        src : url,
        autoplay : true
    });

    return video;
}

export{VideoWrapper};