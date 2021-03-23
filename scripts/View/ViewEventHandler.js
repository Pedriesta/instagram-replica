import { classes, icons, ids } from '../Registry.js';
import {domQuerySelector, domEditElementById, domGetElementById, domGetElementsByClass} from './DomLayer.js';

let viewEventHandlers = (function(){
    return{
        toggleFollow : function(isFollowed){
        isFollowed ? domEditElementById({
            id : ids.FOLLOW_BUTTON,
            content : "unfollow"
            }) : domEditElementById({
                id : ids.FOLLOW_BUTTON,
                content : "follow"
            });
        },

        editFollowerCount : function(followerCount){
            domEditElementById({
                id : ids.FOLLOWERS_COUNT,
                content : followerCount
            });
        },

        // implement suitable functions in dom layer for this
        toggleLike : function(id, liked){
            const post = domQuerySelector(`.postWrapper[data-id="${id}"]`);
            liked 
            ? domGetElementsByClass({
                elementToQuery : post,
                className : classes.LIKE_ICON
            })[0].setAttribute("src", icons.HEART_FILLED) :
            domGetElementsByClass({
                elementToQuery : post,
                className : classes.LIKE_ICON
            })[0].setAttribute("src", icons.HEART); 
        },
        //  implement suitable functions in dom layer for this
        editLikeCount : function(id, likeCount){
            const post = domQuerySelector(`.postWrapper[data-id="${id}"]`);
           domGetElementsByClass({
               elementToQuery : post,
               className : classes.NUMBER_OF_LIKES
            })[0].innerHTML = likeCount;
        },

        viewImages : function(){
            domEditElementById({
                id : ids.VIDEO_GRID,
                style : {
                    display : "none"
                }
            });

            domGetElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_OFF);

            domEditElementById({
                id : ids.VIDEO_TAB,
                style : {
                    fontWeight : "normal",
                    borderTop : "none"
                }
            });

            domEditElementById({
                id : ids.IMAGE_GRID,
                style : {
                    display : "grid"
                }
            });

            domGetElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_ON);

            domEditElementById({
                id : ids.IMAGE_TAB,
                style : {
                    fontWeight : "bold",
                    borderTop : "1px solid black"
                }
            });
        },

        viewVideos : function(){
            domEditElementById({
                id : ids.VIDEO_GRID,
                style : {
                    display : "grid"
                }
            });
            
            domGetElementById(ids.VIDEO_GRID_ICON).setAttribute("src", icons.TV_ON);

            domEditElementById({
                id : ids.VIDEO_TAB,
                style : {
                    fontWeight : "bold",
                    borderTop : "1px solid black"
                }
            });

            domEditElementById({
                id : ids.IMAGE_GRID,
                style : {
                    display : "none"
                }
            });
            
            domGetElementById(ids.IMAGE_GRID_ICON).setAttribute("src", icons.GRID_OFF);

            domEditElementById({
                id : ids.IMAGE_TAB,
                style : {
                    fontWeight : "normal",
                    borderTop : "none"
                }
            });
        },

        changePageViewVideo : function(videoUrl){
            sessionStorage.setItem("recentVideoUrl", videoUrl);
            window.open("./video.html", 'targetWindow');
            return false;
        },

        loadVideo : function(){
            let videoUrl = sessionStorage.getItem("recentVideoUrl");
            domGetElementById("videoSource").setAttribute("src", videoUrl);
            console.log(videoUrl);
            document.querySelector("video").load();
        }
    };
})();

export{viewEventHandlers};