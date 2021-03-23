import {domCreateImage} from '../DomLayer.js';
import {classes, ids} from '../../Registry.js'; 
class Avatar{
    constructor(imageUrl){
        const avatar = domCreateImage({
            classes : [classes.ICON],
            id : [ids.AVATAR],
            src : imageUrl,
            alt : "Avatar Image",

        });
        return avatar;
    }
}

export{Avatar};