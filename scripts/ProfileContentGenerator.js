import {ids} from './Registry.js';
import { domEditElementById } from './DomLayer.js';
const profileContentGenerator = (function(){

    return function loadUserInfo(userInfo){

        const {name, numberOfPosts, following, followers, bio} = userInfo;

        //set user name
        domEditElementById({
            id : ids.USER_NAME,
            content : name});
        // set number of posts
        domEditElementById({
            id : ids.NUMBER_OF_POSTS, 
            content : numberOfPosts
        });
        //set following
        domEditElementById({
            id : ids.FOLLOWING_COUNT, 
            content : following}
            );
        // set number of followers
        domEditElementById({
            id : ids.FOLLOWERS_COUNT,
            content : followers
        });

        domEditElementById({
            id : ids.USER_BIO,
            content : bio
        });
    }
})();

export {profileContentGenerator};
