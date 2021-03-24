import { domCreateDiv, domCreateParagraph } from "../DomLayer.js";

class FollowButtonOfPost{
    constructor(){
        const text = domCreateParagraph({
            id : 'followButtonPostText',
            text : 'Follow'
        })
        const button = domCreateDiv({
            id : 'followButtonPost',
            children : [text]
        });

        return button;
    }
}

export{FollowButtonOfPost};