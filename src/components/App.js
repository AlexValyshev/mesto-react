import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import Loader from '../components/Loader';
import { api } from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import UserAvatar from '../images/iv-custo.jpg'

function App() {

  function handleEditAvatarClick() {
    setChangeAvatarPopupOpen(true);
    setIsOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    setIsOpen(true);
  }

  function handleAddPlaceClick() {
    setAddImagePopupOpen(true);
    setIsOpen(true);
  }

  function handleTrashClick() {
    setTrashPopupOpen(true);
    setIsOpen(true);
  }

  function closeAllPopups() {
    setChangeAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddImagePopupOpen(false);
    setTrashPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddImagePopupOpen, setAddImagePopupOpen] = React.useState(false);
  const [isChangeAvatarPopupOpen, setChangeAvatarPopupOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isTrashPopupOpen, setTrashPopupOpen] = React.useState(false);
  const initialUserInfo = {
    name: 'Жак-Ив Кусто',
    about: 'Исследователь океана',
    avatar: UserAvatar,
  }
  const [currentUser, setCurrentUser] = React.useState(initialUserInfo);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialInfo() // Загрузка карточек и информации о пользователе.
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err); // Выведем ошибку в консоль
      });
  }, []);

  console.log(cards);
  function handleCardLike(card) {// Запрос на установку лайка и дизлайка
    const isLiked = card.likes.some(i => i._id === currentUser._id);
      api
        .changeLikeStatus(card._id, isLiked)
        .then((newCard) => {
          const newCards = cards.map((item) => item._id === card._id ? newCard : item);
          setCards(newCards);
        })
  }

  function handleCardDelete(card) { // Запрос на удаление карточки.
    api
        .deleteCard(card._id)
        .then((res) => {
          const newCards = cards.filter((item) => item._id !== card._id);
          setCards(newCards);
        })
  }

  function handleUpdateUser(onUpdateUser) { // Запрос на обновление данных пользователя.
    api
        .setUserInfo(onUpdateUser)
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        closeAllPopups()
  }

  function handleUpdateAvatar(onUpdateAvatar) { // Запрос на обновление аватара пользователя.
    api
        .setUserAvatar(onUpdateAvatar)
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        closeAllPopups()
  }

  return (
    <div className="page">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onTrashClick={handleTrashClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete} />
        
        <EditProfilePopup isOpen={isEditProfilePopupOpen ? isOpen : false}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        
        <PopupWithForm title='Новое место' name='cards' loader={<Loader />}
          isOpen={isAddImagePopupOpen ? isOpen : false} onClose={closeAllPopups}>
          <fieldset className="popup__info">
            <input className="popup__input popup__input_card-name" type="text" id="card-input" name="card"
              placeholder="Название" minLength="1" maxLength="30" required />
            <span id="card-input-error" className="popup__error" />
            <input className="popup__input popup__input_link" type="url" id="link-input" name="link"
              placeholder="Сссылка на картинку" required />
            <span id="link-input-error" className="popup__error" />
          </fieldset>
        </PopupWithForm>

        <EditAvatarPopup isOpen={isChangeAvatarPopupOpen ? isOpen : false}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm title='Вы уверены?' name='trash' loader='Да'
            isOpen={isTrashPopupOpen ? isOpen : false} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>   
      <Footer />
    </div>
  );
}

export default App;
