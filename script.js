const bio = "Tekion".bold() + "<br>" + "\nSoftware Company<br>".italics() + "One platform that seamlessly connects your entire business.";

function fillData(){
    fetch('./data.json').then(response => {
        return response.json();
      }).then(data => {
          loadImages(data);
          loadProfilePicture(data);
          loadUserInfo(data);
        console.log(data);
      }).catch(err => {
          console.log(err);
        // Do something for an error here
      });
}

function loadImages(data){
    posts = data.posts;
    posts.forEach((post, i) => {
        // image container
        imageContainer = createImageWrapper(post);
        //finally add to the document
        document.getElementsByClassName("image-grid")[0].appendChild(imageContainer);
    });
}

function loadProfilePicture(data){
    imageUrl = data.profilePicture;
    let profilePicture = createProfilePicture(imageUrl);
    document.getElementsByClassName("profile-picture-wrapper")[0].appendChild(profilePicture);
}

function loadUserInfo(data){
    const fetchResult = data;
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
