import{Brand} from './Brand.js';
import{SearchBar} from './SearchBar.js';
import {NavigationIconWrapper} from './NavigationIconWrapper.js';

class Navbar{
    constructor(){
        this.brand = new Brand("Instagram");
        this.searchBar = new SearchBar();
        this.navigationIconWrapper = new NavigationIconWrapper();

        this.navBar = document.createElement("nav");
        this.navBar.appendChild(this.brand);
        this.navBar.appendChild(this.searchBar);
        this.navBar.appendChild(this.navigationIconWrapper);

        return this.navBar;
    }
}

export{Navbar};