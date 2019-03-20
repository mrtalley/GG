import React from "react";
import PhotoGrid from "./layout/PhotoGrid";
import LoadingImages from "./layout/LoadingImages";
import { flamelinkInstance } from "../global.js";

class GraphicDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };

        flamelinkInstance.content.get("graphicDesign")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log("something bad happened :-(\n", error));
    }

    render() {
        return (
            <div>
                Graphic Design Page
                <PhotoGrid images={this.state.images} />
                {this.state.images.length !== 0 ?
                    <PhotoGrid images={this.state.images} /> : <LoadingImages />}
            </div>
        );
    }
}

export default GraphicDesign;
