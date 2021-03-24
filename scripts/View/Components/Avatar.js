import {domCreateImage} from '../DomLayer.js';
import {classes, ids} from '../../Registry.js'; 
class Avatar{
    constructor(imageUrl, id=null){
        const avatar = domCreateImage({
            classes : [classes.ICON],
            id : id,
            src : imageUrl,
            alt : "Avatar Image",
        });
        return avatar;
    }
}

export{Avatar};