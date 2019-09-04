import React from "react";
import PhotoGrid from "./layout/PhotoGrid";
import LoadingImages from "./layout/LoadingImages";
import { flamelinkInstance } from "../global.js";

// Scss
import '../assets/styles/scss/fine-art.scss';

class FineArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };

        this.loadImages();
    }

    async loadImages() {
        // TODO maybe render these in cloud functions and call them individually.
        // Lazy loading isn't working and I think it's because all images are
        // loaded at once
        await flamelinkInstance.content.get("fineArt")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.error("something bad happened :-(\n", error));
    }

    render() {
        return (
            <div>
                <div className='fine-art-title'>
                    Fine Art
                </div>
                { this.state.images.length !== 0 ?
                    <PhotoGrid images={ this.state.images } /> : <LoadingImages /> }
            </div>
        );
    }
}

export default FineArt;
