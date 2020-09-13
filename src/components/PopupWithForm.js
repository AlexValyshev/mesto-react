import React from 'react';


function PopupWithForm({ title, name, isOpen, loader, onClose, children }) {
    return (
        <div className={isOpen ? `popup__container popup__container-form popup__container_${name} popup__container_opened ` :
            `popup__container popup__container-form popup__container_${name}`}>
            <form name={`form-${name}`} action="#" method="post" className={`popup__form popup__form_${name}`} noValidate>
                <h3 className="popup__form-heading">{title}</h3>
                {children}
                <button className={`popup__button popup__button_save-${name}`} type="submit">{loader}</button>
            </form>
            <button type="button" className={`popup__close popup__close_container-${name}`} onClick={onClose}></button>
        </div>
    );
}

export default PopupWithForm;