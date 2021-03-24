import {VideoDetailed} from './Components/VideoDetailed.js';

class VideoView{
    constructor(){
        this.controllerEventHandlers = {};
    }
    // Main Render Method
    render(data){
        this.videoDetails = new VideoDetailed(data);
    }

}

export{VideoView};