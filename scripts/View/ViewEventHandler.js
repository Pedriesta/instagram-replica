import {domGetElementById,} from './DomLayer.js';

let viewEventHandlers = (function(){
    return{
        changePageViewVideo : function(videoUrl){
            console.log("Aca");
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