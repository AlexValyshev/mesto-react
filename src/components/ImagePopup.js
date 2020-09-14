import React from 'react';

function ImagePopup({ card, onClose }) {
    return (
        <section className={card.src ? 'popup popup_opened' : 'popup'}>
            <div className={card.src ? 'popup__container popup__container-view popup__container_opened'
                : 'popup__container popup__container-view'}>
                <figure className="popup__view">
                    <img className="popup__image" src={card.src} alt={card.alt} />
                    <figcaption className="popup__caption">{card.title}</figcaption>
                </figure>
                <button type="button" className="popup__close popup__close_view" onClick={onClose} />
            </div>
        </section>
    );
}

export default ImagePopup;   