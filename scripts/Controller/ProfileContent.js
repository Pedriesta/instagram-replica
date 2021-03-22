class ProfileContentController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init(){
        this.view.controllerEventHandler = {
            toggleFollow : this.toggleFollow,
        }

        await this.model.init();
        this.view.render(this.model.data);
        this.view.attachEventListenersStaticElements();
    }

    toggleFollow = () => {
        const isFollowed = this.model.toggleFollow();
        this.view.editFollowerCount(this.model.data.getNumberOfFollowers());
        this.view.toggleFollow(isFollowed);
    }

}

export{ProfileContentController};