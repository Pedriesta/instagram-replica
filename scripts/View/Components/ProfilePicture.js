import {ids} from '../../Registry.js';
import { domCreateImage, domGetElementById} from '../DomLayer.js';

class ProfilePicture{
    constructor(imageUrl){
        this.profilePicture = domCreateImage({
            id : ids.PROFILE_PICTURE,
            src : imageUrl,
            alt : "Profile Picture"
        });
        domGetElementById(ids.PROFILE_PICTURE_WRAPPER).appendChild(this.profilePicture);
        return this.profilePicture;
    }
}

export{ProfilePicture};