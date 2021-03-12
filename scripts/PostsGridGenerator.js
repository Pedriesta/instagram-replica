import { ids, classes, icons } from './Registry.js';
import { eventHandlers } from "./EventHandlers.js";
let postsGridGenerator = (function(){
    function createImageWrapper(post){
        let imageContainer = createDivWithPostID(post.id);
        //like and comment icons
        let iconWrapper = createLikeCommentIconWrapper(post);

        //Image
        let image = createImage(post.imageUrl, post.caption);

        //wrap everything in the final container
        imageContainer.appendChild(iconWrapper);
        imageContainer.appendChild(image);

        return imageContainer;
    }

    function createImage(url, caption){
        let image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("alt", toString(caption));
        image.classList.add(classes.GALLERY_POST);
        return image;
    }

    function createPostWrapper(post){
        let postContainer = createDivWithPostID(post.id);

        let anchorWrapper = document.createElement("a");
        anchorWrapper.setAttribute("href", post.videoUrl);
        // anchorWrapper.onclick = function(){
        //     console.log("activated");
            // window.open(post.videoUrl, 'targetWindow', 'width=500,height=500');
        //     return false;
        // }

        anchorWrapper.onclick = eventHandlers.changePageViewVideo(post.videoUrl);
        let iconWrapper = createLikeCommentIconWrapper(post);
        let video = createVideo(post.videoUrl);

        postContainer.appendChild(iconWrapper);
        anchorWrapper.appendChild(video);
        postContainer.appendChild(anchorWrapper);

        return postContainer;
    }

    function createVideo(url){
        let video = document.createElement("video");
        let source = document.createElement("source");
        source.setAttribute("src", url);
        source.setAttribute("type", "video/mp4");
        video.classList.add(classes.GALLERY_POST);
        video.appendChild(source);

        return video;
    }

    function createDivWithPostID(id){
        let postContainer = document.createElement("div");
        postContainer.className = classes.POST_WRAPPER;
        postContainer.setAttribute("data-id", id);
        return postContainer;
    }

    function createLikeCommentIconWrapper(post){
        let likeIcon = document.createElement("img");
        likeIcon.classList.add(classes.LIKE_ICON, classes.ICON);
        likeIcon.setAttribute("src", icons.HEART);
        likeIcon.addEventListener("click", eventHandlers.toggleLike.bind(null, event, post.id));

        let numberOfLikes = document.createElement("p");
        numberOfLikes.innerHTML = post.likes;
        numberOfLikes.classList.add(classes.NUMBER_OF_LIKES);

        let commentIcon = document.createElement("img");
        commentIcon.classList.add(classes.COMMENT_ICON, classes.ICON);
        commentIcon.setAttribute("src", icons.COMMENT);

        let numberOfComments = document.createElement("p");
        numberOfComments.classList.add(classes.NUMBER_OF_COMMENTS);
        numberOfComments.innerHTML = post.comments;

        let iconWrapper = document.createElement("div");
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
                // image container
                let imageContainer = createImageWrapper(image);
                //finally add to the document
                document.getElementById(ids.IMAGE_GRID).appendChild(imageContainer);
            });
        },

        loadVideos : function (videos){
            videos.forEach((post, i) => {
                console.log(post);
                let videoContainer = createPostWrapper(post);
                document.getElementById(ids.VIDEO_GRID).appendChild(videoContainer);
            });
        }
    };

})();

export{postsGridGenerator};