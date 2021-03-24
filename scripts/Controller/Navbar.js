class NavbarController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init(){
        await this.model.init();
        this.view.controllerEventHandlers = {}
        this.view.render(this.model.data);
    }
}

export{NavbarController};