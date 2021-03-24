import { classes, icons, ids } from '../Registry.js';
import {domQuerySelector, domEditElementById, domGetElementById, domGetElementsByClass} from './DomLayer.js';

let viewEventHandlers = (function(){
    return{
        changePageViewVideo : function(videoUrl){
            sessionStorage.setItem("recentVideoUrl", videoUrl);
            window.open("./video.html", 'targetWindow');
            return false;
        },

        loadVideo : function(){
            let videoUrl = sessionStorage.getItem("recentVideoUrl");
            domGetElementById("videoSource").setAttribute("src", videoUrl);
            document.querySelector("video").load();
        }
    };
})();

export{viewEventHandlers};