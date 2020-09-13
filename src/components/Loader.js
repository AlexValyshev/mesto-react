import React from 'react';

function Loader() {
    return (
        <>
            <p className="popup__button-text popup__button-save">Сохранить</p>
            <p className="popup__button-text popup__button-saving popup__button-text_disabled">Сохранение...</p>
        </>
    );
}

export default Loader;   