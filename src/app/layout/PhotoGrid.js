import React from 'react';
import Photo from './Photo';

// Scss
import '../../assets/styles/scss/layout/photo-grid.scss';

class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.loadImages();
    }

    loadImages() {
        let i, j;
        let imageArray = Object.values(this.props.images);
        this.photoList = [];
        let curType = "";
        this.types = [];
        this.sections = [];

        // TODO change to for in/of
        for (i = 0; i < imageArray.length; i++) {
            curType = imageArray[i].type;
            this.types.push(curType);

            // TODO change to for in/of
            for (j = i; j < imageArray.length; j++) {
                let image = imageArray[j];

                if (curType !== image.type) {
                    break;
                }

                this.photoList.push(
                    <Photo
                        src={image.imageLink}
                        subtitle={image.subtitle}
                        materials={image.materials}
                        alt={image.subtitle}
                    />
                );
            }

            this.sections.push(
                <div className='fine-art-section' key={i}>
                    <div className='fine-art-subtitle'>
                        {curType}
                    </div>
                    <div className='fine-art-photos'>
                        {this.photoList}
                    </div>
                </div>
            );

            this.photoList = [];
            i = j;
        }
    }

    render() {
        return (
            <div className="grid">
                { this.sections }
            </div>
        );
    }
}

export default PhotoGrid;
