import { useSelector, useDispatch } from 'react-redux';

import * as api from '../../../../utils/api';
import './PublicationsItem.css';

import {
    updateLikeOfCard
} from '../../../../features/currentUser/currentUserSlice'

const PublicationsItem = ({ card }) => {

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.currentUser.value);

    const handleLikeChange = async () => {
        await api.updateNumberOfLikes(card, currentUser.userId, card.likes +1);
        dispatch(updateLikeOfCard(card))
    }

    return (
        <li className="publications__item-list">

            <div className="publications__wrapper-top">

                <div className="publications__wrapper-image">
                    <img className="publications__avatar-image"
                         alt="Изображение аватара"
                         src={currentUser.avatar}
                    />
                </div>

                <div className="publications__wrapper-text">
                    <p className="publications__id-profile">{currentUser._id}</p>
                    <a href="#1" className="publications__link-location">Москва</a>
                </div>

                <button className="publications__button publications__button-action-menu" />

            </div>

            <img className="publications__item-image"
                 alt="Изображение"
                 src={card.link}
            />

            <div className="publications__wrapper-bottom">
                <div className="publications__wrapper-button">
                    <div className="publications__wrapper-left-button">
                        <button className="publications__button publications__button-like" onClick={handleLikeChange}/>
                        <button className="publications__button publications__button-comment" />
                        <button className="publications__button publications__button-send" />
                    </div>

                    <button className="publications__button publications__button-notes" />
                </div>

                <p className="publications__likes">Нравится <span className="publications__likes-number">{card.likes}</span></p>
            </div>

        </li>
    );
}

export default PublicationsItem;