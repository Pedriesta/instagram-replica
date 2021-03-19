import { ids, classes, icons } from './Registry.js';
import { domCreateAnchor, domCreateImage , domCreateParagraph, domCreateDiv, domAppendElementById, domCreateVideo, domGetElementById} from './DomLayer.js';

const postsGridGenerator = (function(){
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

    function createVideoWrapper(post, controllerEventHandlers){
        const iconWrapper = createLikeCommentIconWrapper(post, controllerEventHandlers.toggleLike);
        const video = createVideo(post.videoUrl);
        const anchorWrapper = domCreateAnchor({
            children : [video]
        })
        anchorWrapper.addEventListener("click", controllerEventHandlers.changePageViewVideo.bind(null, post.videoUrl));

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

    function createLikeIcon(id, toggleLikeHandler){
        const likeIcon = domCreateImage({
            classes : [classes.LIKE_ICON, classes.ICON],
            src : icons.HEART,
            alt : "Like"
        });
        likeIcon.addEventListener("click", toggleLikeHandler.bind(null, id));
        return likeIcon;
    }

    function createCommentIcon(id){
        return domCreateImage({
            classes : [classes.COMMENT_ICON, classes.ICON],
            src : icons.COMMENT,
            alt : "comment icon"
        });
    }

    function createNumberOfLikesParagraph(likes){
        return domCreateParagraph({
            classes : [classes.NUMBER_OF_LIKES],
            text : likes
        });
    }

    function createNumberOfComments(comments){
        return domCreateParagraph({
            classes : [classes.NUMBER_OF_COMMENTS],
            text : comments
        });
    }

    function createLikeCommentIconWrapper(post, toggleLikeHandler){
        const likeIcon = createLikeIcon(post.id, toggleLikeHandler);
        const numberOfLikes = createNumberOfLikesParagraph(post.likes);

        const commentIcon = createCommentIcon(post.id);
        const numberOfComments = createNumberOfComments(post.likes);

        const iconWrapper = domCreateDiv({
            classes : [classes.LIKES_AND_COMMENTS],
            children : [likeIcon, numberOfLikes, commentIcon, numberOfComments]
        });

        return iconWrapper;
    }

    // attaching event listeners to follow button

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