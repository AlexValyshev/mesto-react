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

  function closeAllPopups() {
    setChangeAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddImagePopupOpen(false);
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

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}/>
      <Footer />
      <section className={isEditProfilePopupOpen || isAddImagePopupOpen || isChangeAvatarPopupOpen || selectedCard
        ? 'popup popup_opened' : 'popup'}>
        <PopupWithForm title='Редактировать профиль' name='profile' loader={<Loader />}
          isOpen={isEditProfilePopupOpen ? { isOpen } : false} onClose={closeAllPopups}>
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
          isOpen={isAddImagePopupOpen ? { isOpen } : false} onClose={closeAllPopups}>
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
          isOpen={isChangeAvatarPopupOpen ? { isOpen } : false} onClose={closeAllPopups}>
          {<fieldset className="popup__info">
            <input className="popup__input popup__input_avatar" type="url" id="avatar-input" name="avatar"
              placeholder="Ссылка на новый аватар" required />
            <span id="avatar-input-error" className="popup__error"></span>
          </fieldset>}
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* <div className="popup__container popup__container-form popup__container_trash">
          <form name="form-trash" action="#" method="post" className="popup__form popup__form_trash" novalidate>
            <h3 className="popup__form-heading">Вы уверены?</h3>
            <button className="popup__button popup__button-text popup__button_trash" type="submit">Да</button>
          </form>
          <button type="button" className="popup__close popup__close_container-trash"></button>
        </div> */}
      </section>
    </div>
  );
}

export default App;
