import { domCreateParagraph} from '../DomLayer.js';
import { classes} from '../../Registry.js';

class NumberOfLikesParagraph{
    constructor(likes){
        const numberOfLikes = domCreateParagraph({
            classes : [classes.NUMBER_OF_LIKES],
            text : likes
        });
        return numberOfLikes;
    }
}

export{NumberOfLikesParagraph};