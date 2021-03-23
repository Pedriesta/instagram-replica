import{Brand} from './Brand.js';
import{SearchBar} from './SearchBar.js';
import {NavigationIconWrapper} from './NavigationIconWrapper.js';

class Navbar{
    constructor(avatarUrl){
        this.brand = new Brand("Instagram");
        this.searchBar = new SearchBar();
        this.navigationIconWrapper = new NavigationIconWrapper(avatarUrl);

        this.navBar = document.createElement("nav");
        this.navBar.appendChild(this.brand);
        this.navBar.appendChild(this.searchBar);
        this.navBar.appendChild(this.navigationIconWrapper);

        return this.navBar;
    }
}

export{Navbar};