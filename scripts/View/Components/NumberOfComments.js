import { domCreateParagraph} from '../DomLayer.js';
import { classes} from '../../Registry.js';


class NumberOfCommentsParagraph{
    constructor(comments){
        const numberOfComments = domCreateParagraph({
            classes : [classes.NUMBER_OF_COMMENTS],
            text : comments
        });
        return numberOfComments;
    }
}

export{NumberOfCommentsParagraph};