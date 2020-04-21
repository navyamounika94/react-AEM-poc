import React from 'react';

interface Props {
    className?: string;
    style?: any;
    onClick?: () => void;
}

const SliderArrow = (props: Props) => {
    return (
        <div
            className={props.className}
            style={{ ...props.style, display: 'block' }}
            onClick={props.onClick}
        />
    );
};

export default SliderArrow;