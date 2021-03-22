import {createLikeCommentIconWrapper} from './LikeCommentIconWrapper.js';
import { classes} from '../../Registry.js';
import { domCreateAnchor, domCreateDiv, domCreateVideo} from '../DomLayer.js';

function createVideoWrapper(post, controllerEventHandlers){
    const iconWrapper = createLikeCommentIconWrapper(post, controllerEventHandlers.toggleLike);
    const video = createVideo(post.videoUrl);
    const anchorWrapper = domCreateAnchor({
        children : [video]
    })
    anchorWrapper.addEventListener("click", ()=>{
        controllerEventHandlers.changePageViewVideo(post.videoUrl)
    });

    const postContainer = domCreateDiv({
        classes : [classes.POST_WRAPPER],
        children : [iconWrapper, anchorWrapper]
    });
    postContainer.setAttribute("data-id", post.id);

    return postContainer;
}

function createVideo(url){
    const video = domCreateVideo({
        classes : [classes.GALLERY_POST],
        src : url,
        autoplay : true
    });

    return video;
}

export{createVideoWrapper};