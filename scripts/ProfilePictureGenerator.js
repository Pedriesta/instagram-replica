import {ids} from './Registry.js';

const profilePictureGenerator = (function(){
    function createProfilePicture(imageUrl){
        const profilePicture = document.createElement("img");
        profilePicture.id = ids.PROFILE_PICTURE;
        profilePicture.setAttribute("alt", "Profile Picture");
        profilePicture.setAttribute("src", imageUrl);
    
        return profilePicture;
    }

    return function loadProfilePicture(imageUrl){
        const profilePicture = createProfilePicture(imageUrl);
        document.getElementById(ids.PROFILE_PICTURE_WRAPPER).appendChild(profilePicture);
    }
})();

export{profilePictureGenerator};