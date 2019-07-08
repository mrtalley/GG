import React from 'react';
import Photo from './Photo';

import '../../assets/styles/scss/layout/photo-grid.scss';

let photoList = [];

class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);
        let i;
        let imageArray = Object.values(this.props.images);
        photoList = [];

        for (i = 0; i < imageArray.length; i++) {
            let image = imageArray[i];
            photoList.push(
                <Photo
                    src={ image.imageLink }
                    subtitle={ image.subtitle }
                    materials={ image.materials }
                    alt={ image.subtitle }
                    key={ i }
                />
            );
        }
    }

    render(props) {
        return (
            <div className="grid">
                { photoList }
            </div>
        );
    }
}

export default PhotoGrid;
