import { domCreateImage} from '../DomLayer.js';
import { classes, icons } from '../../Registry.js';

class CommentIcon{
    constructor(id){
        const commentIcon = domCreateImage({
            classes : [classes.COMMENT_ICON, classes.ICON],
            src : icons.COMMENT,
            alt : "comment icon"
        });
        return commentIcon;
    }
}

export{CommentIcon};