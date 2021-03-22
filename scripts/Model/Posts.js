import {otherConstants} from '../Registry.js';

class PostsModel{
    constructor(){
        this.state = {};
        this.data = this.dataFetchFunctions();
    }
    async init(){
        let data = await fetch(otherConstants.DATA_FILE);
        this.state = await data.json();
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
        post.liked ? post.likes++: post.likes--;
        return post.liked;
    }

    dataFetchFunctions(){
        return {
            getNumberOfLikes : (postId) => {
                // fetch post from this.state
                let post = this.state.posts.images.filter((p)=>{
                    return p.id==postId;
                })[0];

                if(!post)
                post = this.state.posts.videos.filter((p) => {
                    return p.id==postId;
                })[0];

                return post.likes;
            },


            getNumberOfPosts : () => {
                return this.state.numberOfPosts;
            },

            getImages : () => {
            return this.state.posts.images;
            },

            getVideos : () => {
                return this.state.posts.videos;
            },
        }
    }

}

export{PostsModel};