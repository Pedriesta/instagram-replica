import {otherConstants} from '../Registry.js';

class ProfileContentModel{
    constructor(){
        this.state = {};
        this.data = this.dataFetchFunctions();
    }

    async init(){
        let data = await fetch(otherConstants.DATA_FILE);
        this.state = await data.json();
        this.state.bio = otherConstants.BIO;
    }

    toggleFollow(){
        this.state.isFollowed = !this.state.isFollowed;
        this.state.isFollowed ? this.state.followers++ : this.state.followers--;
        return this.state.isFollowed;
    }

    dataFetchFunctions(){
        return {
            getNumberOfFollowers : () => {
                return this.state.followers;
            },

            getNumberOfFollowing : () => {
                return this.state.following;
            },

            getBio : () => {
                return this.state.bio;
            },

            getName : () => {
                return this.state.name;
            },

            getNumberOfPosts : () => {
                return this.state.numberOfPosts;
            },

            isFollowed : () => {
                return this.state.isFollowed;
            }
        }
    }
}

export{ProfileContentModel};