const documentState = (function (){
    const state = {
        posts : [{
            id : 1,
            liked : false,
            likes : 45
        },
        {
            id : 2,
            liked : false,
            likes : 45
        },
        {
            id : 3,
            liked : false,
            likes : 45
        },
        {
            id : 4,
            liked : false,
            likes : 45
        },
        {
            id : 5,
            liked : false,
            likes : 45
        },
        {
            id : 6,
            liked : false,
            likes : 45
        },
        {
            id : 7,
            liked : false,
            likes : 45
        },
        {
            id : 8,
            liked : false,
            likes : 45
        },
        {
            id : 9,
            liked : false,
            likes : 45
        },
        {
            id : 10,
            liked : false,
            likes : 45
        },
        {
            id : 11,
            liked : false,
            likes : 45
        }],
    following : false
    }

    return {
        toggleFollow : function (){
            // toggle following state
            state.following = !state.following;
            return state.following;
        },

        toggleLike : function (postId){
            // fetch post from state
            const post = state.posts.filter((p)=>{
                return p.id=postId;
            })[0];
            // toggle like
            post.liked = !post.liked;

            // increment or decrement like count
            post.liked ? post.likes = post.likes + 1 : post.likes = post.likes - 1;
            return post.liked;
        },

        getNumberOfLikes: function (postId){
            // fetch post from state
            const post = state.posts.filter((p)=>{
                return p.id=postId;
            })[0];

            return post.likes;
        }
    }
})();

export{documentState};