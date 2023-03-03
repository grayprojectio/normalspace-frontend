import React, { useEffect, useRef } from 'react';
import classes from './Modal.module.css';

function Modal({ children, visible, setVisible, ...props }) {

    const handleKeyDown = event => {
        if (event.keyCode === 27) setVisible(false);
    };

    const handleClick = () => {
        setVisible(false);
    };

    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <>
            <div
                ref={ ref }
                tabIndex={ -1 }
                className={ classes.box }
                onKeyDown={ e => handleKeyDown(e) }
                onClick={ e => handleClick() }
            >
                <div
                    className={ classes.modal_content }
                    onClick={ e => e.stopPropagation()}
                >
                    { children }
                </div>
            </div>
        </>
    );
}

export default Modal;