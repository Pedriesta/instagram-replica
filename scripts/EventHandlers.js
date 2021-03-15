import { classes, icons, ids } from './Registry.js';
import {documentState} from './State.js';

let eventHandlers = (function(){
    return {
        toggleFollow : function (){
        const followed = documentState.toggleFollow();
        followed ? document.getElementById(ids.FOLLOW).innerHTML = "unfollow" : document.getElementById(ids.FOLLOW).innerHTML = "follow";
        
        },

        toggleLike : function (id){
            let liked = documentState.toggleLike(id);
            let post = document.querySelector(`.postWrapper[data-id="${id}"]`)
            post.getElementsByClassName(classes.NUMBER_OF_LIKES)[0].innerHTML = documentState.getNumberOfLikes(id);
            
            liked 
            ? post.getElementsByClassName(classes.LIKE_ICON)[0].setAttribute("src", icons.HEART_FILLED) :
            post.getElementsByClassName(classes.LIKE_ICON)[0].setAttribute("src", icons.HEART); 

        },

        viewImages : function (){
            // set videos display to none
            document.getElementById(ids.VIDEO_GRID).style.display = "none";
            document.getElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_OFF);
            document.getElementById(ids.VIDEO_TAB).style.fontWeight="normal";

            document.getElementById(ids.IMAGE_GRID).style.display = "grid";
            document.getElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_ON);
            document.getElementById(ids.IMAGE_TAB).style.fontWeight="bold";

        },

        viewVideos : function (){
            document.getElementById(ids.VIDEO_GRID).style.display = "grid";
            document.getElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_ON);
            document.getElementById(ids.VIDEO_TAB).style.fontWeight="bold";

            document.getElementById(ids.IMAGE_GRID).style.display = "none";
            document.getElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_OFF);
            document.getElementById(ids.IMAGE_TAB).style.fontWeight="normal";

        },

        changePageViewVideo : function (videoUrl){
            console.log("Activated");
            sessionStorage.setItem("recentVideoUrl", videoUrl);
            window.open("./video.html", 'targetWindow');

            return false;
        },

        loadVideo : function (){
            console.log("activated");
            console.log(sessionStorage);
            let videoUrl = sessionStorage.getItem("recentVideoUrl");
            document.getElementById("videoSource").setAttribute("src", videoUrl);
            document.querySelector("video").load();
        }
    }
})();

export{eventHandlers};