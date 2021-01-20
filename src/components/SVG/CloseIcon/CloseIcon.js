import React from 'react';

const CloseIcon = ({className, color}) => {
    return (
        <svg className={className || ""}
             xmlns="http://www.w3.org/2000/svg"
             x="0"
             y="0"
             height="50"
             width="50"
             enableBackground="new 0 0 340.8 340.8"
             version="1.1"
             viewBox="0 0 340.8 340.8"
             xmlSpace="preserve"
             fill={color}
        >
            <path
                d="M170.4 0C76.4 0 0 76.4 0 170.4s76.4 170.4 170.4 170.4 170.4-76.4 170.4-170.4S264.4 0 170.4 0zm0 323.6c-84.4 0-153.2-68.8-153.2-153.2S86 17.2 170.4 17.2 323.6 86 323.6 170.4s-68.8 153.2-153.2 153.2z"/>
            <path
                d="M182.4 169.6l50-50c3.2-3.2 3.2-8.8 0-12-3.2-3.2-8.8-3.2-12 0l-50 50-50-50c-3.2-3.2-8.8-3.2-12 0-3.2 3.2-3.2 8.8 0 12l50 50-50 49.6c-3.2 3.2-3.2 8.8 0 12 1.6 1.6 4 2.4 6 2.4s4.4-.8 6-2.4l50-50 50 50c1.6 1.6 4 2.4 6 2.4s4.4-.8 6-2.4c3.2-3.2 3.2-8.8 0-12l-50-49.6z"/>
        </svg>
    );
};

export default CloseIcon;