import {otherConstants} from '../Registry.js';

class NavbarModel{
    constructor(){
        this.state = {};
        this.data = this.dataFetchFunctions();
    }

    async init(){
        let data = await fetch(otherConstants.DATA_FILE);
        this.state = await data.json();
    }

    dataFetchFunctions(){
        return {
            getProfilePicture : () => {
                return this.state.profilePicture;
            }
        }
    }
}

export{NavbarModel};