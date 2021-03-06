import { domCreateImage} from '../DomLayer.js';
import { classes, icons } from '../../Registry.js';

class LikeIcon{
    constructor(isLiked){
        let src = "";
        if(isLiked)
        src = icons.HEART_FILLED
        else
        src = icons.HEART;
        // console.log(src);
        const likeIcon = domCreateImage({
            classes : [classes.LIKE_ICON, classes.ICON],
            src : src,
            alt : "Like"
        });
        return likeIcon;
    }

}
export{LikeIcon};