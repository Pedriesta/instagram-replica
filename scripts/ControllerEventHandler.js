// import { classes, icons, ids } from './Registry.js';
// import {model} from './Model.js';

// let eventHandlers = (function(){
//     return {
//         toggleFollow : function (){
//             const isFollowed = model.toggleFollow();
//             document.getElementById(ids.FOLLOWERS_COUNT).innerHTML = model.getNumberOfFollowers();
//             isFollowed ? document.getElementById(ids.FOLLOW_BUTTON).innerHTML = "unfollow" : document.getElementById(ids.FOLLOW_BUTTON).innerHTML = "follow";
//         },

//         toggleLike : function (id){
//             let liked = model.toggleLike(id);
//             let post = document.querySelector(`.postWrapper[data-id="${id}"]`);
//             post.getElementsByClassName(classes.NUMBER_OF_LIKES)[0].innerHTML = model.getNumberOfLikes(id);

//             liked 
//             ? post.getElementsByClassName(classes.LIKE_ICON)[0].setAttribute("src", icons.HEART_FILLED) :
//             post.getElementsByClassName(classes.LIKE_ICON)[0].setAttribute("src", icons.HEART); 

//         },

//         viewImages : function (){
//             // set videos display to none
//             document.getElementById(ids.VIDEO_GRID).style.display = "none";
//             document.getElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_OFF);
//             document.getElementById(ids.VIDEO_TAB).style.fontWeight="normal";
//             document.getElementById(ids.VIDEO_TAB).style.borderTop="none";

//             document.getElementById(ids.IMAGE_GRID).style.display = "grid";
//             document.getElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_ON);
//             document.getElementById(ids.IMAGE_TAB).style.fontWeight="bold";
//             document.getElementById(ids.IMAGE_TAB).style.borderTop="1px solid black";

//         },

//         viewVideos : function (){
//             document.getElementById(ids.VIDEO_GRID).style.display = "grid";
//             document.getElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_ON);
//             document.getElementById(ids.VIDEO_TAB).style.fontWeight="bold";
//             document.getElementById(ids.VIDEO_TAB).style.borderTop="2px solid black";

//             document.getElementById(ids.IMAGE_GRID).style.display = "none";
//             document.getElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_OFF);
//             document.getElementById(ids.IMAGE_TAB).style.fontWeight="normal";
//             document.getElementById(ids.IMAGE_TAB).style.borderTop="none";

//         },

//         changePageViewVideo : function (videoUrl){
//             console.log("Activated");
//             sessionStorage.setItem("recentVideoUrl", videoUrl);
//             window.open("./video.html", 'targetWindow');

//             return false;
//         },

//         loadVideo : function (){
//             console.log(sessionStorage);
//             let videoUrl = sessionStorage.getItem("recentVideoUrl");
//             document.getElementById("videoSource").setAttribute("src", videoUrl);
//             document.querySelector("video").load();
//         }
//     }
// })();

// export{eventHandlers};