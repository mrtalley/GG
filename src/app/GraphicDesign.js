import React from 'react';
import PhotoGrid from './layout/PhotoGrid';
import LoadingImages from './layout/LoadingImages';

import { flamelinkInstance, analytics } from '../global.js';

// Scss
import '../assets/styles/scss/graphic-design.scss';

class GraphicDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    async loadImages() {
        flamelinkInstance.content.get('graphicDesign')
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log('Error loading Graphic Design CMS Content\n', error));
    }

    componentDidMount() {
        this.loadImages();
        analytics.logEvent('Graphic Design page');
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
