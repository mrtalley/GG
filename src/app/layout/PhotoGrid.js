import React from 'react';
import Photo from './Photo';

import '../../assets/styles/scss/layout/photo-grid.scss';

let photoList = [];

class PhotoGrid extends React.Component {

    constructor(props) {
        super(props);
        let i;
        let imageArray = Object.values(this.props.images);

        for (i = 0; i < imageArray.length; i++) {
            let curImage = imageArray[i];
            photoList.push(
                <Photo src={curImage.imageLink} subtitle={curImage.subtitle} alt={curImage.alt} key={i} />
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
