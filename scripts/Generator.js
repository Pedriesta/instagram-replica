import {postsGridGenerator} from './PostsGridGenerator.js';
import {profilePictureGenerator} from './ProfilePictureGenerator.js';
import { profileContentGenerator} from './ProfileContentGenerator.js';
import {otherConstants} from './Registry.js'
import {model} from './Model.js';

//IIFE to make sure fillData doesn't go in the window scope
let fillData = (async function (){
    try{
        await model.init();
        postsGridGenerator.loadImages(model.getImages());
        postsGridGenerator.loadVideos(model.getVideos());
        profilePictureGenerator(model.getProfilePicture());

        const userInfo = {
            name : model.getName(),
            numberOfPosts : model.getNumberOfPosts(),
            followers : model.getNumberOfFollowers(),
            following : model.getNumberOfFollowing(),
            bio : model.getBio(),
        }
        profileContentGenerator(userInfo);
    }
    catch(error){
        console.log(error);
    }

});

export{fillData};
