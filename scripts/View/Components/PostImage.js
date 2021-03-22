import {createLikeCommentIconWrapper} from './LikeCommentIconWrapper.js';
import { domCreateImage , domCreateDiv} from '../DomLayer.js';
import { classes} from '../../Registry.js';


function createImageWrapper(post, controllerEventHandlers){
    const iconWrapper = createLikeCommentIconWrapper(post, controllerEventHandlers.toggleLike);

    const image = createImage(post.imageUrl, post.caption);

    const imageContainer = domCreateDiv({
        classes : [classes.POST_WRAPPER],
        children : [iconWrapper, image],
    });
    imageContainer.setAttribute("data-id", post.id);
    return imageContainer;
}

function createImage(url, caption){
    return domCreateImage({
        classes : [classes.GALLERY_POST],
        src : url,
        alt : caption
    });
}

export{createImageWrapper};