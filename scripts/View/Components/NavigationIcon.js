import { domCreateDiv, domCreateImage } from "../DomLayer.js";

class NavigationIcon{
    constructor(imageUrl){
        console.log(imageUrl);
        this.image = domCreateImage({
            classes : ["navigationIcons"],
            src : imageUrl
        });
        this.navigationIcon = domCreateDiv({
            classes : ["icon"],
            children : [this.image]
        });

        return this.navigationIcon;
    }
}

export{NavigationIcon};