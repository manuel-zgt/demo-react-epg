import React, {useEffect} from 'react';
import ReactDOM from "react-dom";

import './modal.scss';


const Modal = (props: any) => {

    const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);


    /*if (!props.show) return null;*/

    return ReactDOM.createPortal(
        <div className={`modal ${props.show ? 'enter-done' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">

                    </h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('root')!
    );
};

export default Modal;
