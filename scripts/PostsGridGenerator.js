import { ids, classes, icons } from './Registry.js';
import { eventHandlers } from "./EventHandlers.js";

const postsGridGenerator = (function(){
    function createImageWrapper(post){
        const imageContainer = createDivWithPostID(post.id);
        const iconWrapper = createLikeCommentIconWrapper(post);

        const image = createImage(post.imageUrl, post.caption);

        imageContainer.appendChild(iconWrapper);
        imageContainer.appendChild(image);

        return imageContainer;
    }

    function createImage(url, caption){
        const image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("alt", toString(caption));
        image.classList.add(classes.GALLERY_POST);
        return image;
    }

    function createPostWrapper(post){
        const postContainer = createDivWithPostID(post.id);
        const anchorWrapper = document.createElement("a");
        anchorWrapper.addEventListener("click", eventHandlers.changePageViewVideo.bind(null, post.videoUrl));

        const iconWrapper = createLikeCommentIconWrapper(post);
        const video = createVideo(post.videoUrl);

        anchorWrapper.appendChild(video);

        postContainer.appendChild(iconWrapper);
        postContainer.appendChild(anchorWrapper);

        return postContainer;
    }

    function createVideo(url){
        const video = document.createElement("video");
        const source = document.createElement("source");
        source.setAttribute("src", url);
        source.setAttribute("type", "video/mp4");
        video.classList.add(classes.GALLERY_POST);
        video.appendChild(source);

        return video;
    }

    function createDivWithPostID(id){
        const postContainer = document.createElement("div");
        postContainer.className = classes.POST_WRAPPER;
        postContainer.setAttribute("data-id", id);
        return postContainer;
    }

    function createLikeIcon(id){
        const likeIcon = document.createElement("img");
        likeIcon.classList.add(classes.LIKE_ICON, classes.ICON);
        likeIcon.setAttribute("src", icons.HEART);
        likeIcon.addEventListener("click", eventHandlers.toggleLike.bind(null, id));
        return likeIcon;
    }

    function createCommentIcon(id){
        const commentIcon = document.createElement("img");
        commentIcon.classList.add(classes.COMMENT_ICON, classes.ICON);
        commentIcon.setAttribute("src", icons.COMMENT);
        return commentIcon;
    }

    function createNumberOfLikesParagraph(likes){
        const numberOfLikes = document.createElement("p");
        numberOfLikes.innerHTML = likes;
        numberOfLikes.classList.add(classes.NUMBER_OF_LIKES);
        return numberOfLikes;
    }

    function createNumberOfComments(comments){
        const numberOfComments = document.createElement("p");
        numberOfComments.classList.add(classes.NUMBER_OF_COMMENTS);
        numberOfComments.innerHTML = comments;
        return numberOfComments;
    }

    function createLikeCommentIconWrapper(post){
        const likeIcon = createLikeIcon(post.id);
        const numberOfLikes = createNumberOfLikesParagraph(post.likes);

        const commentIcon = createCommentIcon(post.id);
        const numberOfComments = createNumberOfComments(post.likes);

        const iconWrapper = document.createElement("div");
        iconWrapper.classList.add(classes.LIKES_AND_COMMENTS);

        iconWrapper.appendChild(likeIcon);
        iconWrapper.appendChild(numberOfLikes);
        iconWrapper.appendChild(commentIcon);
        iconWrapper.appendChild(numberOfComments);

        return iconWrapper;
    }

    return {
        loadImages :function (images){
            images.forEach((image, i) => {
                const imageContainer = createImageWrapper(image);
                document.getElementById(ids.IMAGE_GRID).appendChild(imageContainer);
            });
        },

        loadVideos : function (videos){
            videos.forEach((post, i) => {
                const videoContainer = createPostWrapper(post);
                document.getElementById(ids.VIDEO_GRID).appendChild(videoContainer);
            });
        }
    };

})();

export{postsGridGenerator};