import {ids} from './Registry.js';
import { domEditElementById } from './DomLayer.js';
const profileContentGenerator = (function(){

    return function loadUserInfo(userInfo){

        const {name, numberOfPosts, following, followers, bio} = userInfo;

        //set user name
        domEditElementById(ids.USER_NAME, name);
        // set number of posts
        domEditElementById(ids.NUMBER_OF_POSTS, numberOfPosts);
        //set following
        domEditElementById(ids.FOLLOWING_COUNT, following);
        // set number of followers
        domEditElementById(ids.FOLLOWERS_COUNT, followers);

        domEditElementById(ids.USER_BIO, bio);
    }
})();

export {profileContentGenerator};
