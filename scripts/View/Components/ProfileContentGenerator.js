import {classes, icons, ids} from '../../Registry.js';
import { domCreateDiv, domCreateImage, domCreateSpan, domEditElementById } from '../DomLayer.js';


class ProfileContent{
    constructor(userInfo, isFollowed=true, toggleFollow){
        this.name = domCreateSpan({
            id : ids.USER_NAME,
            content : userInfo.name
        });

        let follwButtonContent = "";
        isFollowed ? follwButtonContent = "unfollow" : follwButtonContent = "follow";
        this.followButton = domCreateDiv({
            id : ids.FOLLOW_BUTTON,
            innerHTML : follwButtonContent
        });
        this.followButton.addEventListener("click", toggleFollow);

        const caretIcon = domCreateImage({
            id : ids.CARET, 
            src : icons.CARET
        })
        this.caretWithBackground = domCreateDiv({
            id : ids.CARET_WITH_BACKGROUND,
            children : [caretIcon]
        });

        this.spread = domCreateImage({
            id : ids.SPREAD,
            src : icons.SPREAD
        });

        this.titleButtons = domCreateDiv({
            id : ids.TITLE_BUTTONS,
            children : [this.name, this.followButton, this.caretWithBackground, this.spread]
        });

        this.postsFollowFollowerInfo = domCreateDiv({
            id : ids.POSTS_FOLLOWER_INFO
        });

        this.postsFollowFollowerInfo.innerHTML = `<b id="numberOfPosts">${userInfo.numberOfPosts} </b> posts<span class="space"></span>
        <b id="followers">${userInfo.followers} </b> followers<span class="space"></span><b id="following">${userInfo.following}</b> following`;



        this.bio = domCreateDiv({
            id : ids.USER_BIO,
            innerHTML : userInfo.bio
        });



        this.profileContent = domCreateDiv({
            id : ids.PROFILE_CONTENT,
            children : [this.titleButtons, this.postsFollowFollowerInfo, this.bio]
        });

        return this.profileContent;

    }
}

export {ProfileContent};
