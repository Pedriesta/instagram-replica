function domCreateImage({id=null, classes=null, src, alt}){
    const image = document.createElement("img");
    if(id) image.id = id;

    if(classes) image.classList.add(...classes);

    image.setAttribute("src", src);
    image.setAttribute("alt", alt);

    return image;
}

function domCreateVideo({id=null, classes=null, src, alt="Nothing", controls="controls", autoplay=false, loop=true}){
    const video = document.createElement("video");
    if(id) video.id = id;
    if(classes) video.classList.add(...classes);

    video.setAttribute("controls", controls);
    video.autoplay = autoplay;
    video.loop = loop;

    const source = document.createElement("source");
    source.setAttribute("src", src);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    return video;
}

function domCreateParagraph({id=null, classes=null, text}){
    const para = document.createElement("p");

    if(id) para.id = id;

    if(classes) para.classList.add(...classes);

    para.textContent = text;
    return para;
}

function domCreateDiv({id=null, classes=null, children}){
    const div = document.createElement("div");
    if(id) div.id = id;

    if(classes) div.classList.add(...classes);

    children.forEach((child) => {
        div.appendChild(child);
    });
    return div;
}

function domCreateAnchor({id=null, classes=null, children=null, href=null}){
    const anchor = document.createElement("a");
    if(id) a.id = id;

    if(classes) a.classList.add(...classes);

    children.forEach((child) => {
        anchor.appendChild(child);
    });

    anchor.setAttribute("href", href);
    return anchor;
}

function domEditElementById(id, content){
    document.getElementById(id).innerHTML = content;
}

function domAppendElementById(id, child){
    document.getElementById(id).appendChild(child);
}

function domGetElementById(id){
    return document.getElementById(id);
}


export{domCreateAnchor, domCreateImage, domCreateParagraph, domCreateDiv, domEditElementById, domAppendElementById, domCreateVideo,
    domGetElementById};