import React from 'react';
import PencilAvatar from '../images/pencil-avatar.svg';
import UserAvatar from '../images/iv-custo.jpg'
import { api } from '../utils/api.js'
import Card from '../components/Card'


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onTrashClick }) {
    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(UserAvatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getInitialInfo() // Загрузка информации о пользователе.
            .then(([userInfo, initialCards]) => {
                // console.log(userInfo);
                setUserAvatar(userInfo.avatar);
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                const items = initialCards.map(item => ({
                    src: item.link,
                    alt: item.name,
                    title: item.name,
                }))

                setCards(items);
            })
            .catch((err) => {
                console.log(err); // Выведем ошибку в консоль
            });
    }, []);

    return (
        <main className="content">
            <section className="profile page__container">
                <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
                    <img className="profile__pencil" src={PencilAvatar} alt="Значок редактирования профиля" />
                </div>
                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__editbutton" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button type="button" className="profile__addbutton" onClick={onAddPlace}></button>
            </section>

            <section className="photo-place page__container">
                <ul className="photo-place__elements">
                    {cards.map((card, i) => <Card key={i} card={card} onCardClick={onCardClick} onTrashClick={onTrashClick}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;