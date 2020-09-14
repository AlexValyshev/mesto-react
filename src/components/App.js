import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';
import Loader from '../components/Loader';

function App(props) {

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
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddImagePopupOpen, setAddImagePopupOpen] = React.useState(false);
  const [isChangeAvatarPopupOpen, setChangeAvatarPopupOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [isTrashPopupOpen, setTrashPopupOpen] = React.useState(false);

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} onTrashClick={handleTrashClick}/>
      <Footer />
      <section className={isEditProfilePopupOpen || isAddImagePopupOpen || isChangeAvatarPopupOpen
        || selectedCard || isTrashPopupOpen ? 'popup popup_opened' : 'popup'}>
        <PopupWithForm title='Редактировать профиль' name='profile' loader={<Loader />}
          isOpen={isEditProfilePopupOpen ?  isOpen  : false} onClose={closeAllPopups}>
          {<fieldset className="popup__info">
            <input className="popup__input popup__input_name" type="text" id="name-input" name="name"
              placeholder="Имя" minLength='2' maxLength="40" required />
            <span id="name-input-error" className="popup__error"></span>
            <input className="popup__input popup__input_job" type="text" id="job-input" name="job"
              placeholder="О себе" minLength="2" maxLength="200" required />
            <span id="job-input-error" className="popup__error"></span>
          </fieldset>}
        </PopupWithForm>

        <PopupWithForm title='Новое место' name='cards' loader={<Loader />}
          isOpen={isAddImagePopupOpen ? isOpen  : false} onClose={closeAllPopups}>
          {<fieldset className="popup__info">
            <input className="popup__input popup__input_card-name" type="text" id="card-input" name="card"
              placeholder="Название" minLength="1" maxLength="30" required />
            <span id="card-input-error" className="popup__error"></span>
            <input className="popup__input popup__input_link" type="url" id="link-input" name="link"
              placeholder="Сссылка на картинку" required />
            <span id="link-input-error" className="popup__error"></span>
          </fieldset>}
        </PopupWithForm>

        <PopupWithForm title='Обновить аватар' name='avatar' loader={<Loader />}
          isOpen={isChangeAvatarPopupOpen ? isOpen  : false} onClose={closeAllPopups}>
          {<fieldset className="popup__info">
            <input className="popup__input popup__input_avatar" type="url" id="avatar-input" name="avatar"
              placeholder="Ссылка на новый аватар" required />
            <span id="avatar-input-error" className="popup__error"></span>
          </fieldset>}
        </PopupWithForm>
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm title='Вы уверены?' name='trash' loader='Да'
          isOpen={isTrashPopupOpen ? isOpen : false} onClose={closeAllPopups}>
        </PopupWithForm>
      </section>
    </div>
  );
}

export default App;
