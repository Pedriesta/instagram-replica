class SearchBar{
    constructor(){
        this.searchBar = document.createElement("div");
        this.searchBar.id="searchBar";
        this.searchBar.innerHTML = `
        <div id="withIcon">
            <span class="material-icons">search</span><input type="text" placeholder="Search..">
        </div>`;
        return this.searchBar;
    }
}

export{SearchBar};