import {ids} from './Registry.js';
import { domCreateImage} from './DomLayer.js';

const profilePictureGenerator = (function(){
    function createProfilePicture(imageUrl){
        const profilePicture = domCreateImage({
            id : ids.PROFILE_PICTURE,
            src : imageUrl,
            alt : "Profile Picture"
        });
    
        return profilePicture;
    }

    return function loadProfilePicture(imageUrl){
        const profilePicture = createProfilePicture(imageUrl);
        document.getElementById(ids.PROFILE_PICTURE_WRAPPER).appendChild(profilePicture);
    }
})();

export{profilePictureGenerator};