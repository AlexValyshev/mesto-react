import React from 'react';

function ImagePopup() {
    return (
        <div className="popup__container popup__container-view">
            <figure className="popup__view">
                <img className="popup__image" src="#" alt="" />
                <figcaption className="popup__caption"></figcaption>
            </figure>
            <button type="button" className="popup__close popup__close_view"></button>
        </div>
    );
}

export default ImagePopup;   