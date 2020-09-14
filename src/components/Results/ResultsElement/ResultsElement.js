import React from 'react';
import './ResultsElement.scss';

const ResultsElement = (props) => {
    const audioClickHandler = (audio) => {
        audio.play();
    }

    return (
        <div
            className={`${props.className} results-element`}>
            <div
                className='results-element__audio'
                onClick={() => audioClickHandler(props.audio)}
            />
            <p className='results-element__text'>{props.word}</p>
            <p className='results-element__text 
                results-element__text_gray 
                results-element__transcription'
            >
                {props.transcription}
            </p>
            <p className='results-element__text results-element__text_gray'>
                {props.translate}
            </p>
        </div>
    )
}
export default ResultsElement;