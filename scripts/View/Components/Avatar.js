class Avatar{
    constructor(imageUrl){
        const avatar = domCreateImage({
            classes : [classes.AVATAR, classes.ICON],
            src : imageUrl,
            alt : "Avatar Image"
        });
        return avatar;
    }
}