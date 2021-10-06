import './PopupCreateCard.css';
import { useState } from "react";

const PopupCreateCard = ({
    isOpenPopupCreateCard,
    handleShowPopup,
    handleAddCard,
}) => {

    const [link, setLink] = useState('');
    const [textLocation, setTextLocation] = useState('');
    const [textDescription, setTextDescription] = useState('');

    const handleChangeUrlImage = event => setLink(event.target.value);
    const handleChangeTextLocation = event => setTextLocation(event.target.value);
    const handleChangeTextDescription = event => setTextDescription(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        handleAddCard({
            link,
            textLocation,
            textDescription
        });
    }

    return (
        <div className={`popup popup_type_create-card ${isOpenPopupCreateCard ? 'popup_visible' : ''}`}
             onClick={handleShowPopup}
        >
            <div className="popup__content popup__content_type_create-card" onClick={event => event.stopPropagation()}>

                <h1 className="popup__title">Добавить новое фото</h1>

                <form className="popup__form popup__form_type_create-card"
                      onSubmit={handleSubmit}
                >

                    <input
                        value={link}
                        type="url"
                        name="url-image"
                        className="popup__input"
                        placeholder="Введите ссылку на карточку"
                        onChange={handleChangeUrlImage}
                    />

                    <input
                        value={textLocation}
                        type="text"
                        name="text-location"
                        className="popup__input"
                        placeholder="Введите место"
                        onChange={handleChangeTextLocation}
                    />

                    <input
                        value={textDescription}
                        type="text"
                        name="text-description"
                        className="popup__input"
                        placeholder="Описание к картинке"
                        onChange={handleChangeTextDescription}
                    />

                    <button className="popup__button">Добавить</button>

                </form>

            </div>
        </div>
    );
}

export default PopupCreateCard;