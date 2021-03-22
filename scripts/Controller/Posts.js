class PostsController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init(){
        this.view.controllerEventHandler = {
            toggleLike : this.toggleLike,
            viewImages : this.viewImages,
            viewVideos : this.viewVideos,
            changePageViewVideo : this.changePageViewVideo,
            loadVideo : this.loadVideo
        }

        await this.model.init();
        this.view.render(this.model.data);
        this.view.attachEventListenersStaticElements();
    }

    toggleLike = (id) => {
        let liked = this.model.toggleLike(id);
        this.view.editLikeCount(id, this.model.data.getNumberOfLikes(id));
        this.view.toggleLike(id, liked);
    }

    viewImages = () => {
        // set videos display to none
        this.view.viewImages();
    }

    viewVideos = () => {
        this.view.viewVideos();
    }

    changePageViewVideo = (videoUrl) => {
        this.view.changePageViewVideo(videoUrl);
    }

    loadVideo = () => {
        this.view.loadVideo();
    }
}

export{PostsController};