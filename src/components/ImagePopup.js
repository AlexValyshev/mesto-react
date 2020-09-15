import React from 'react';
import { useRef } from 'react'

function ImagePopup({ card, onClose }) {
    const popupViewContainer = useRef(null);
    return (
        <section className={card.src ? 'popup popup_opened popup__change-background' : 'popup'}>
            <div className={card.src ? 'popup__container popup__container-view popup__container_opened'
                : 'popup__container popup__container-view'}>
                <figure className="popup__view" ref={popupViewContainer}> 
                    {card.src && <img className="popup__image"
                        src={card.src} alt={card.alt}
                        onLoad={evt => {
                            popupViewContainer.current.style.width = `${ evt.target.offsetWidth }px`
                            popupViewContainer.current.style.height = `${evt.target.offsetHeight}px`
                            }
                        } />}
                    <figcaption className="popup__caption">{card.title}</figcaption>
                </figure>
                <button type="button" className="popup__close popup__close_view" onClick={onClose} />
            </div>
        </section>
    );
}

export default ImagePopup;   