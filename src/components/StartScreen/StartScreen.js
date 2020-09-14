import React from 'react';
import './StartScreen.scss';
import { TEXT } from '../constants'

const StartScreen = (props) => {
    const startScreen = (
        <div className='start-screen'>
            <h2 className='start-screen__heading'>{TEXT.START_SCREEN.HEADING}</h2>
            <p className='start-screen__text'>{TEXT.START_SCREEN.DESCRIPTION}</p>
            <button
                onClick={props.onClick}
                className='start-screen__start-button'
            >
                {TEXT.START_SCREEN.BUTTON}
            </button>
        </div>
    )

    return (
        props.showStartScreen
            ? startScreen
            : null
    )
}
export default StartScreen;