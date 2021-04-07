import React, {useContext} from 'react';
import SpeakersContext from './SpeakerContext'
const Speakers = () => {
    const speakers = useContext(SpeakersContext);
    return (
        <div>
            {speakers.map(({imageSrc,  name}) => {
                return <img src={`images/${imageSrc}.png`}
                    alt={name} key={imageSrc}></img>
            })}
        </div>
    );
};

export default Speakers;