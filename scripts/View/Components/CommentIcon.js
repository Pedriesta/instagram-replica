import { domCreateImage} from '../DomLayer.js';
import { classes, icons } from '../../Registry.js';


function createCommentIcon(id){
    return domCreateImage({
        classes : [classes.COMMENT_ICON, classes.ICON],
        src : icons.COMMENT,
        alt : "comment icon"
    });
}

export{createCommentIcon};