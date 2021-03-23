import { icons } from "../../Registry.js";
import { domCreateDiv } from "../DomLayer.js";
import { NavigationIcon} from './NavigationIcon.js';

class NavigationIconWrapper{
    constructor(){
        this.home = new NavigationIcon(icons.HOME);
        this.messages = new NavigationIcon(icons.CHAT_BUBBLE);
        this.explore = new NavigationIcon(icons.EXPLORE);
        this.activity = new NavigationIcon(icons.HEART);
        this.avatar = new NavigationIcon(icons.USER);

        this.wrapper = domCreateDiv({
            id : "navigationButtons",
            children : [this.home, this.messages, this.explore, this.activity, this.avatar]
        });

        return this.wrapper;
    }
}

export{NavigationIconWrapper};