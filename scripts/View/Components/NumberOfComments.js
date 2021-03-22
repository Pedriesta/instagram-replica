import { domCreateParagraph} from '../DomLayer.js';
import { classes} from '../../Registry.js';


function createNumberOfCommentsParagraph(comments){
    return domCreateParagraph({
        classes : [classes.NUMBER_OF_COMMENTS],
        text : comments
    });
}

export{createNumberOfCommentsParagraph};