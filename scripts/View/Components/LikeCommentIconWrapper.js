import {createLikeIcon} from './LikeIcon.js';
import {createCommentIcon} from './CommentIcon.js';
import {createNumberOfLikesParagraph} from './NumberOfLikes.js';
import {createNumberOfCommentsParagraph} from './NumberOfComments.js';
import { domCreateDiv} from '../DomLayer.js';
import { classes} from '../../Registry.js';


function createLikeCommentIconWrapper(post, toggleLikeHandler){
    const likeIcon = createLikeIcon(post.id, toggleLikeHandler);
    const numberOfLikes = createNumberOfLikesParagraph(post.likes);

    const commentIcon = createCommentIcon(post.id);
    const numberOfComments = createNumberOfCommentsParagraph(post.likes);

    const iconWrapper = domCreateDiv({
        classes : [classes.LIKES_AND_COMMENTS],
        children : [likeIcon, numberOfLikes, commentIcon, numberOfComments]
    });

    return iconWrapper;
}

export{createLikeCommentIconWrapper};