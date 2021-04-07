import React from 'react';
import { SimpleImg } from "react-simple-img";

const SpeakerImage = ({ id, firstName, lastName }) => {
    const imageUrl = `/speakers/speaker-${id}.jpg`;
    return (
        <SimpleImg
            src={imageUrl}
            animationDuration="1"
            width={200}
            height={200}
            applyAspectRatio="true"
        />
        
    );
}

export default SpeakerImage;