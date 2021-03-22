import {ids} from '../../Registry.js';
import { domCreateImage, domAppendElementById} from '../DomLayer.js';

class ProfilePicture{
    constructor(imageUrl){
        this.profilePicture = domCreateImage({
            id : ids.PROFILE_PICTURE,
            src : imageUrl,
            alt : "Profile Picture"
        });
        domAppendElementById(ids.PROFILE_PICTURE_WRAPPER, this.profilePicture);
        return this.profilePicture;
    }
}

export{ProfilePicture};