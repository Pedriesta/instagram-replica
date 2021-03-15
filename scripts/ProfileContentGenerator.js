import {ids} from './Registry.js';

const profileContentGenerator = (function(){

    return function loadUserInfo(userInfo){

        const {name, numberOfPosts, following, followers, bio} = userInfo;

        //set user name
        document.getElementById(ids.USER_NAME).innerHTML = name;
        // set number of posts
        document.getElementById(ids.NUMBER_OF_POSTS).innerHTML = numberOfPosts;
        //set following
        document.getElementById(ids.FOLLOWING_COUNT).innerHTML = following;
        // set number of followers
        document.getElementById(ids.FOLLOWERS_COUNT).innerHTML = followers;

        document.getElementById(ids.USER_BIO).innerHTML = bio;
    }
})();

export {profileContentGenerator};
