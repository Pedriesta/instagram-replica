const ids = {
    PROFILE_PICTURE : "profilePicture",
    PROFILE_PICTURE_WRAPPER : "profilePictureWrapper",
    USER_NAME : "name",
    NUMBER_OF_POSTS : "numberOfPosts",
    FOLLOWING_COUNT : "following",
    FOLLOWERS_COUNT : "followers",
    USER_BIO : "bio",
    PROFILE_CONTENT : "profileContent",
    TITLE_BUTTONS : "titleButtons",
    IMAGE_GRID : "imageGrid",
    VIDEO_GRID : "videoGrid",
    FOLLOW_BUTTON : "follow",
    IMAGE_GRID_ICON : "imageGridIcon",
    VIDEO_GRID_ICON : "videoGridIcon",
    VIDEO_TAB : "videoTab",
    IMAGE_TAB : "imageTab",
    AVATAR : "avatar",
    HEADER : "navbar",
    CARET : "arrowDown",
    CARET_WITH_BACKGROUND : "caret",
    SPREAD : "spread",
    POSTS_FOLLOWER_INFO : "postsFollowFollowerInfo",
    PROFILE : "profile"
}

const classes = {
    POST_WRAPPER : "postWrapper",
    GALLERY_POST : "gallerypost",
    LIKE_ICON : "likeIcon",
    ICON : "icon",
    NUMBER_OF_LIKES : "numberOfLikes",
    COMMENT_ICON : "commentIcon",
    NUMBER_OF_COMMENTS : "numberOfComments",
    LIKES_AND_COMMENTS : "likesComments",
    SHOW_GRID :  "gridShow",
    HIDE_GRID : "gridHide",
    MATERIAL_ICON : "material-icons"
}

const icons = {
    HEART : "./icons/favorite_border-24px.svg",
    CHAT_BUBBLE : "./icons/chat_bubble-24px.svg",
    COMMENT : "./icons/chat_bubble-24px.svg",
    HEART_FILLED : "./icons/favorite-24px.svg",
    TV_ON : "./icons/tv-24px.svg",
    TV_OFF : "./icons/tv_off-24px.svg",
    GRID_ON : "./icons/grid_on-24px.svg",
    GRID_OFF : "./icons/grid_off-24px.svg",
    HOME : "./icons/home-24px.svg",
    USER : "./icons/perm_identity-24px.svg",
    EXPLORE : "./icons/explore-24px.svg",
    CARET : "./icons/keyboard_arrow_down-white-18dp.svg",
    SPREAD : "./icons/more_horiz-24px.svg"
}

const state = {
    IMAGE_GRID : "imageGrid",
    VIDEO_GRID : "videoGrid"
}

const otherConstants = {
    DATA_FILE : "./scripts/Data.json",
    BIO : "Tekion".bold() + "<br>" + "\nSoftware Company<br>".italics() + "One platform that seamlessly connects your entire business."
}


export {ids, classes, icons, otherConstants, state};