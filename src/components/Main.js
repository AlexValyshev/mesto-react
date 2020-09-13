import React from 'react';
import PencilAvatar from '../images/pencil-avatar.svg';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    return (
        <main className="content">
            <section className="profile page__container">
                <div className="profile__avatar" onClick={onEditAvatar} >
                    <img className="profile__pencil" src={PencilAvatar} alt="Значок редактирования профиля" />
                </div>
                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__editbutton" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__job">Исследователь океана</p>
                </div>
                <button type="button" className="profile__addbutton" onClick={onAddPlace}></button>
            </section>

            <section className="photo-place page__container">
                <ul className="photo-place__elements"></ul>
            </section>
        </main>
    );
}

export default Main;