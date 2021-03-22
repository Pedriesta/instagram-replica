import { domCreateImage} from '../DomLayer.js';
import { classes, icons } from '../../Registry.js';

class LikeIcon{
    constructor(){
        const likeIcon = domCreateImage({
            classes : [classes.LIKE_ICON, classes.ICON],
            src : icons.HEART,
            alt : "Like"
        });
        return likeIcon;
    }

}
export{LikeIcon};