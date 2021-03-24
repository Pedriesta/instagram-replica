class SpreadOfPost{
    constructor(){
        const span = document.createElement("span");
        span.classList.add("material-icons");
        span.id = "spreadOfPost";
        span.innerHTML = "more_horiz";
        return span;
    }
}

export{SpreadOfPost};