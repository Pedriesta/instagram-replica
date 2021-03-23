class NavbarController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init(){
        this.view.controllerEventHandlers = {}
        await this.model.init();
        this.view.render(this.model.data);
    }
}

export{NavbarController};