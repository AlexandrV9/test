import { useHistory } from 'react-router-dom';

import './SubscribersItem.css';

const SubscribersItem = ({ id, userData }) => {
    const history = useHistory();

    const handleTransitionAnotherProfile = () => {
        history.push(`/${id}`);
    }

    return (
        <li className="subscribers__item-list" onClick={handleTransitionAnotherProfile}>
            <div className="subscribers__user-wrapper">
                <img className="subscribers__user-avatar"
                     alt="Аватра пользователя"
                     src={userData.avatar}
                />
            </div>
            <p className="subscribers__user-name">{userData.name}</p>
        </li>
    );
}

export default SubscribersItem;