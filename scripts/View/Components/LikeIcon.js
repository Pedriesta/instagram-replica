import { domCreateImage} from '../DomLayer.js';
import { classes, icons } from '../../Registry.js';


function createLikeIcon(id, toggleLikeHandler){
    const likeIcon = domCreateImage({
        classes : [classes.LIKE_ICON, classes.ICON],
        src : icons.HEART,
        alt : "Like"
    });
    likeIcon.addEventListener("click", ()=>{
        toggleLikeHandler(id)
    });
    return likeIcon;
}

export{createLikeIcon};