class ProfileContentController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init(){
        this.view.controllerEventHandlers = {
            toggleFollow : this.toggleFollow,
        }

        await this.model.init();
        this.view.render(this.model.data);
    }

    toggleFollow = () => {
        const isFollowed = this.model.toggleFollow();
        this.view.render(this.model.data);
    }

}

export{ProfileContentController};