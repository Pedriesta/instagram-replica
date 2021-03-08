const bio = "Tekion".bold() + "<br>" + "\nSoftware Company<br>".italics() + "One platform that seamlessly connects your entire business.";

function getFetchedData(){
    const fetchResult = {
        "name" : "tekioncorp",
        "followers" : 346,
        "following" : 500,
        "numberOfPosts" : 12,
        "posts" : [
            {
            "imageUrl" : "./images/download5.jpeg",
            "caption" : "Tekion Corp",
            "likes" : 45,
            "comments" : 50
            },
            {
                "imageUrl" : "./images/download1.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/downloa2.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download3.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download4.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download5.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download6.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download1.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/downloa2.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download3.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
            {
                "imageUrl" : "./images/download4.jpeg",
                "caption" : "Tekion Corp",
                "likes" : 45,
                "comments" : 50
            },
        ],
        "profilePicture" : "./images/download.png",
        "bio" : bio
    }

    return fetchResult;
}

function fillData(){
    loadImages();
    loadProfilePicture();
    loadUserInfo();

}
function loadImages(){
    posts = getFetchedData().posts;
    posts.forEach((post, i) => {
        // image container
        imageContainer = createImageWrapper(post);
        //finally add to the document
        document.getElementsByClassName("image-grid")[0].appendChild(imageContainer);
    });
}

function loadProfilePicture(){
    imageUrl = getFetchedData().profilePicture;
    let profilePicture = createProfilePicture(imageUrl);
    document.getElementsByClassName("profile-picture-wrapper")[0].appendChild(profilePicture);
}

function loadUserInfo(){
    const fetchResult = getFetchedData();
    //set user name
    document.getElementsByClassName("name")[0].innerHTML = fetchResult.name;
    // set number of posts
    document.getElementsByClassName("numberOfPosts")[0].innerHTML = fetchResult.numberOfPosts;
    //set following
    document.getElementsByClassName("following")[0].innerHTML = fetchResult.following;
    // set number of followers
    document.getElementsByClassName("followers")[0].innerHTML = fetchResult.followers;

    document.getElementsByClassName("bio")[0].innerHTML = fetchResult.bio;
}


function createImageWrapper(post){
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-wrapper";

    //like and comment icons
    
    let iconWrapper = createLikeCommentIconWrapper();
    //Image
    let image = document.createElement("img");
    image.setAttribute("src", post.imageUrl);
    image.setAttribute("alt", toString(post.caption));
    image.className = "gallery-img";

    //wrap everything in the final container
    imageContainer.appendChild(iconWrapper);
    imageContainer.appendChild(image);

    return imageContainer;
}

function createLikeCommentIconWrapper(){
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

    return iconWrapper;
}

function createProfilePicture(imageUrl){
    let profilePicture = document.createElement("img");
    profilePicture.className = "profile-picture";
    profilePicture.setAttribute("alt", "Profile Picture");
    profilePicture.setAttribute("src", imageUrl);

    return profilePicture;
}
