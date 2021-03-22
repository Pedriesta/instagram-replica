import {LikeIcon} from './LikeIcon.js';
import {CommentIcon} from './CommentIcon.js';
import {NumberOfLikesParagraph} from './NumberOfLikes.js';
import {NumberOfCommentsParagraph} from './NumberOfComments.js';
import { domCreateDiv} from '../DomLayer.js';
import { classes} from '../../Registry.js';


class LikeCommentIconWrapper{
    constructor(post){
        this.likeIcon = new LikeIcon(post.id);
        this.numberOfLikes = new NumberOfLikesParagraph(post.likes);

        this.commentIcon = new CommentIcon(post.id);
        this.numberOfComments = new NumberOfCommentsParagraph(post.likes);

        const iconWrapper = domCreateDiv({
            classes : [classes.LIKES_AND_COMMENTS],
            children : [this.likeIcon, this.numberOfLikes, this.commentIcon, this.numberOfComments]
        });

        return iconWrapper;
    }

}

export{LikeCommentIconWrapper};