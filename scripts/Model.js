import {otherConstants} from './Registry.js';

class Model{
    constructor(){
    }

    async init(){
        let data = await fetch(otherConstants.DATA_FILE);
        this.state = await data.json();
        this.state.bio = otherConstants.BIO;
    }

    toggleFollow(){
        // toggle following this.state
        this.state.isFollowed = !this.state.isFollowed;
        this.state.isFollowed ? this.state.followers++ : this.state.followers--;
        return this.state.isFollowed;
    }

    toggleLike(postId){
        // fetch post from this.state
        let post = this.state.posts.images.filter((p)=>{
            return p.id==postId;
        })[0];

        if(!post)
        post = this.state.posts.videos.filter((p) => {
            return p.id==postId;
        })[0];
        // toggle like
        post.liked = !post.liked;

        // increment or decrement like count
        post.liked ? post.likes = post.likes + 1 : post.likes = post.likes - 1;
        return post.liked;
    }

    getNumberOfLikes(postId){
        // fetch post from this.state
        let post = this.state.posts.images.filter((p)=>{
            return p.id==postId;
        })[0];

        if(!post)
        post = this.state.posts.videos.filter((p) => {
            return p.id==postId;
        })[0];

        return post.likes;
    }

    getNumberOfFollowers(){
        return this.state.followers;
    }

    getNumberOfFollowing(){
        return this.state.following;
    }

    getBio(){
        return this.state.bio;
    }

    getName(){
        return this.state.name;
    }

    getNumberOfPosts(){
        return this.state.numberOfPosts;
    }

    getImages(){
       return this.state.posts.images;
    }

    getVideos(){
        return this.state.posts.videos;
    }

    getProfilePicture(){
        return this.state.profilePicture;
    }
}
// const model = new Model();
export{Model};