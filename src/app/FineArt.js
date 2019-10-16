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
    }

    async loadImages() {
        await flamelinkInstance.content.get("fineArt")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.error("something bad happened :-(\n", error));
    }

    componentDidMount() {
        this.loadImages();
    }

    render() {
        const { images } = this.state;

        return (
            <div>
                <div className='fine-art-title'>
                    Fine Art
                </div>
                {
                    images.length !== 0 ?
                        <PhotoGrid images={ images } />
                        : <LoadingImages />
                }
            </div>
        );
    }
}

export default FineArt;
