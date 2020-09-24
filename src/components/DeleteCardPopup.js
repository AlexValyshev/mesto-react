import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function DeleteCardPopup({ isOpen, onClose, card, onCardDelete, onCloseOverlay }) {
    
    // console.log(card())   
    // const currentUser = React.useContext(CurrentUserContext);
    // const isOwn = card.owner._id === currentUser._id;
    // console.log(isOwn)

    function handleSubmit(evt) {
        evt.preventDefault();
        onCardDelete(card)
    }

    return (
        <PopupWithForm title='Вы уверены?' name='trash' loader='Да'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onCloseOverlay={onCloseOverlay}/>
    );
}

export default DeleteCardPopup;