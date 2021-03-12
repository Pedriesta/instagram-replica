import {postsGridGenerator} from './PostsGridGenerator.js';
import {profilePictureGenerator} from './ProfilePictureGenerator.js';
import { profileContentGenerator} from './ProfileContentGenerator.js';
import {constant} from './constants.js'

//IIFE to make sure fillData doesn't go in the window scope
(function fillData(){
    fetch(constant.DATA_FILE).then(response => {
        return response.json();
    }).then(userProfileContentAndPosts => {
        userProfileContentAndPosts.bio = constant.BIO;
        // load images on default, load videos only when called upon
        postsGridGenerator.loadImages(userProfileContentAndPosts.posts.images);
        postsGridGenerator.loadVideos(userProfileContentAndPosts.posts.videos);
        // load profile picture
        profilePictureGenerator(userProfileContentAndPosts.profilePicture);

        // load user info

        let userInfo = {
            name : userProfileContentAndPosts.name,
            numberOfPosts : userProfileContentAndPosts.numberOfPosts,
            followers : userProfileContentAndPosts.followers,
            following : userProfileContentAndPosts.following,
            bio : userProfileContentAndPosts.bio
        }
        
        profileContentGenerator(userInfo);

        
    }).catch(err => {
    });
})();
