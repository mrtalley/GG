import React from "react";
import PhotoGrid from "./layout/PhotoGrid";
import LoadingImages from "./layout/LoadingImages";
import { flamelinkInstance } from "../global.js";

// Scss
import '../assets/styles/scss/graphic-design.scss'

class GraphicDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    async loadImages() {
        await flamelinkInstance.content.get("graphicDesign")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log("something bad happened :-(\n", error));
    }

    componentDidMount() {
        this.loadImages();
    }

    render() {
        const { images } = this.state;

        return (
            <div>
                <div className='graphic-design-title'>
                    Graphic Design
                </div>
                {
                    images.length !== 0 ?
                        <PhotoGrid images={images} />
                        : <LoadingImages />
                }
            </div>
        );
    }
}

export default GraphicDesign;
