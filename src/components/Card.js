import React from 'react';

function Card({ card, onCardClick, onTrashClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="photo-place__element">
            <button type="button" className="photo-place__trash photo-place__trash_visible" onClick={onTrashClick} />
            <img src={card.src} alt={card.alt} className="photo-place__image" onClick={handleClick}/>
            <div className="photo-place__group">
                <h2 className="photo-place__title">{card.title}</h2>
                <div className="photo-place__group-like">
                    <button type="button" className="photo-place__like"/>
                    <p className="photo-place__number-likes"/>
                </div>
            </div>
        </li>
    );
}

export default Card;