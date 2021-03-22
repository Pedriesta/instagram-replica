import { ids, classes, icons } from '../Registry.js';
import { domCreateAnchor, domCreateImage , domCreateParagraph, domCreateDiv, domAppendElementById, domCreateVideo, domGetElementById} from './DomLayer.js';
import {createCommentIcon} from './Components/CommentIcon.js';
import {createLikeIcon} from './Components/LikeIcon.js';
import {createImageWrapper} from './Components/PostImage.js';
import {createVideoWrapper} from './Components/PostVideo.js';
import {createNumberOfLikesParagraph} from './Components/NumberOfLikes.js';
import {createNumberOfCommentsParagraph} from './Components/NumberOfComments.js';


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

const postsGridGenerator = (function(){
    return {
        loadImages :function (images, controllerEventHandlers){
            images.forEach((image, i) => {
                const imageContainer = createImageWrapper(image, controllerEventHandlers);
                domAppendElementById(ids.IMAGE_GRID, imageContainer);
            });
        },

        loadVideos : function (videos, controllerEventHandlers){
            videos.forEach((post, i) => {
                const videoContainer = createVideoWrapper(post, controllerEventHandlers);
                domAppendElementById(ids.VIDEO_GRID, videoContainer);
            });
        }
    };

})();

export{postsGridGenerator};