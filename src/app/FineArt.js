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

        flamelinkInstance.content.get("fineArt")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log("something bad happened :-(\n", error));
    }

    render() {
        return (
            <div>
                <div className='fine-art-title'>
                    Fine Art
                </div>
                <PhotoGrid images={this.state.images} />
                {this.state.images.length !== 0 ?
                    <PhotoGrid images={this.state.images} /> : <LoadingImages />}
            </div>
        );
    }
}

export default FineArt;
