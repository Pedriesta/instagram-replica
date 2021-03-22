import { domCreateParagraph} from '../DomLayer.js';
import { classes} from '../../Registry.js';


function createNumberOfLikesParagraph(likes){
    return domCreateParagraph({
        classes : [classes.NUMBER_OF_LIKES],
        text : likes
    });
}

export{createNumberOfLikesParagraph};