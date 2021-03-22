import {LikeCommentIconWrapper} from './LikeCommentIconWrapper.js';
import { domCreateImage , domCreateDiv} from '../DomLayer.js';
import { classes} from '../../Registry.js';

class ImageWrapper{
    constructor(post){
        this.iconWrapper = new LikeCommentIconWrapper(post);

        this.image = createImage(post.imageUrl, post.caption);
    
        const imageWrapper = domCreateDiv({
            classes : [classes.POST_WRAPPER],
            children : [this.iconWrapper, this.image],
        });
        imageWrapper.setAttribute("data-id", post.id);
        return imageWrapper;
    }
}

function createImage(url, caption){
    return domCreateImage({
        classes : [classes.GALLERY_POST],
        src : url,
        alt : caption
    });
}

export{ImageWrapper};