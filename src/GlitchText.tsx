import React from 'react';
import './glitch_text.scss'


export interface GlitchTextProps {
    theme: string,
    text: string
}


export const GlitchText = ({ text, theme = 'orange' }: GlitchTextProps) => {
    return <div className={`glitch-${theme} is-glitching`
    } data-text={text}>
        {text}
    </div>
}