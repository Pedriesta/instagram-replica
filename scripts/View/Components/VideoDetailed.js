import { domCreateParagraph , domCreateDiv} from "../DomLayer.js";
import { Avatar } from "./Avatar.js"
import {FollowButtonOfPost} from './FollowButton.js';
import {SpreadOfPost} from './Spread.js';

class VideoDetailed{
    constructor(data){
        this.avatar = new Avatar(data.getProfilePicture(), 'avatarPost');
        this.avatarWrapper = domCreateDiv({
            children : [this.avatar]
        });
        this.userName = domCreateParagraph({
            id : "userNameOfPost",
            text : data.getName()
        })
        this.nameWrapper = domCreateDiv({
            id : "userNamePostWrapper",
            children : [this.userName]
        })
        this.followButton = new FollowButtonOfPost();
        this.spread = new SpreadOfPost();

        this.userInfoFollowBtn = document.getElementById("userInfoFollowBtn");
        this.userInfoFollowBtn.appendChild(this.avatarWrapper);
        this.userInfoFollowBtn.appendChild(this.nameWrapper);
        this.userInfoFollowBtn.appendChild(this.followButton);
        this.userInfoFollowBtn.appendChild(this.spread);


        // this.commentWrapper = new CommentWrapper();
        // this.viewCommentInfoWrapper = new ViewCommentInfoWrapper();
        // this.addComment = new AddComment();
    }
}

export{VideoDetailed};