import { domCreateParagraph, domCreateDiv } from "../DomLayer.js";

class Brand{
    constructor(brandName){
        this.brand = domCreateDiv({
            id : 'brand',
            innerHTML : brandName
        });
        this.brand.innerHTML = brandName;
        return this.brand;
    }
}

export{Brand};