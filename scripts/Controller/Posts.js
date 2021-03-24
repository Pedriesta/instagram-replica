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
        console.log(this.model.state);
        this.view.render(this.model.data);
        this.view.attachEventListenersStaticElements();
    }

    toggleLike = (id) => {
        const liked = this.model.toggleLike(id);
        this.view.render(this.model.data);
    }

    viewImages = () => {
        this.model.switchToImageGrid();
        this.view.render(this.model.data);
    }

    viewVideos = () => {
        this.model.switchToVideoGrid();
        this.view.render(this.model.data);

    }

    changePageViewVideo = (videoUrl) => {
        this.view.changePageViewVideo(videoUrl);
    }

    loadVideo = () => {
        this.view.loadVideo();
    }
}

export{PostsController};