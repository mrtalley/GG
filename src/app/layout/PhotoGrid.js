import React from 'react';
import Photo from './Photo';

import '../../assets/styles/scss/layout/photo-grid.scss';

class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);

        this.formatImages = this.formatImages.bind(this);

        this.state = {
            list: null
        }
    }

    formatImages() {
        let imageArray = Object.values(this.props.images);

        let photos = [];
        let photoKey = 0;

        let photoSections = [];
        let photoSectionKey = 0;

        for (let image of imageArray) {
            if (photos[image.type] === undefined) {
                photos[image.type] = [];
            }

            photos[image.type].push(
                <Photo
                    src={image.imageLink}
                    subtitle={image.subtitle}
                    materials={image.materials}
                    alt={image.subtitle}
                    key={photoKey++}
                />
            );
        }

        for (let photoGroup in photos) {
            const group = photos[photoGroup];

            photoSections.push(
                <div className='fine-art-section' key={photoSectionKey++}>
                    <div className='grid-subtitle'>
                        {photoGroup}
                    </div>
                    <div className='grid-photos'>
                        {group}
                    </div>
                </div>
            );
        }

        return photoSections;
    }

    componentDidMount() {
        const imageGrid = this.formatImages();

        this.setState({
            list: imageGrid
        })
    }

    render() {
        return (
            <div className="grid">
                { this.state.list }
            </div>
        );
    }
}

export default PhotoGrid;
