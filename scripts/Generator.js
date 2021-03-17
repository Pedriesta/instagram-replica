import {postsGridGenerator} from './PostsGridGenerator.js';
import {profilePictureGenerator} from './ProfilePictureGenerator.js';
import { profileContentGenerator} from './ProfileContentGenerator.js';
import {constant} from './constants.js'

//IIFE to make sure fillData doesn't go in the window scope
let fillData = (async function (){
    try{
        let userProfileContentAndPosts = await fetch(constant.DATA_FILE);
        userProfileContentAndPosts = await userProfileContentAndPosts.json();

        userProfileContentAndPosts.bio = constant.BIO;

        postsGridGenerator.loadImages(userProfileContentAndPosts.posts.images);
        postsGridGenerator.loadVideos(userProfileContentAndPosts.posts.videos);
        profilePictureGenerator(userProfileContentAndPosts.profilePicture);

        const userInfo = {
            name : userProfileContentAndPosts.name,
            numberOfPosts : userProfileContentAndPosts.numberOfPosts,
            followers : userProfileContentAndPosts.followers,
            following : userProfileContentAndPosts.following,
            bio : userProfileContentAndPosts.bio
        }
        profileContentGenerator(userInfo);
    }
    catch(error){
        console.log(error);
    }

});

export{fillData};
