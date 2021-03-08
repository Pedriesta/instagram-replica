const fetchResult = {
    "name" : "tekioncorp",
    "followers" : 346,
    "following" : 500,
    "numberOfPosts" : 12,
    "posts" : [
        {
        "imageUrl" : "download.png",
        "caption" : "Tekion Corp",
        "likes" : 45,
        "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
        {
            "imageUrl" : "download.png",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
        },
    ],
    "profilePicture" : "download.png",
    "bio" : "Tekion"
}
function fillData(){
    loadImages();
    // loadProfilePicture();
    // loadUserInfo();
}
function loadImages(){
    // fetch json from the server
    // store it in the below variable
    posts = fetchResult.posts;
    posts.forEach((post, i) => {
        // image container
        let imageContainer = document.createElement("div");
        imageContainer.className = "image_wrapper";

        //like and comment icons
        let likeIcon = document.createElement("span");
        likeIcon.className = "material-icons";
        likeIcon.innerHTML = "favorite_border";

        let commentIcon = document.createElement("span");
        commentIcon.className = "material-icons";
        commentIcon.innerHTML = "chat_bubble";

        let iconWrapper = document.createElement("div");
        iconWrapper.className = "likes-comments";

        iconWrapper.appendChild(likeIcon);
        iconWrapper.appendChild(commentIcon);

        //Image
        let image = document.createElement("img");
        image.setAttribute("src", post.imageUrl);
        image.setAttribute("alt", toString(post.caption));
        image.className = "gallery__img";

        //wrap everything in the final container
        imageContainer.appendChild(iconWrapper);
        imageContainer.appendChild(image);

        //finally add to the document
        document.getElementsByClassName("image-grid")[0].appendChild(imageContainer);
    });
}

function loadProfilePicture(){

}

function loadUserInfo(){

}
