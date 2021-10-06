import { useHistory } from "react-router-dom";

import './Navigation.css';

import pathGearIcon from '../../../../images/icon/icon-gear.svg';
import pathArchiveIcon from '../../../../images/icon/icon-archive.svg';
import pathClockIcon from '../../../../images/icon/icon-clock.svg';
import pathQrCodeIcon from '../../../../images/icon/icon-qr-code.svg';
import pathNotesIcon from '../../../../images/icon/icon-save.svg';
import pathListIcon from '../../../../images/icon/icon-list.svg';
import pathCertificate from '../../../../images/icon/icon-certificate.svg';

import * as api from '../../../../utils/api';
import { persistor } from "../../../../store/store";

const Navigation = ({
    isOpenMenuNavigation,
    handleShowMenu
}) => {

    const history = useHistory();

    const handleSignOut = () => {
        persistor.purge();
        api.signOut();
        history.push('/signin');
        document.body.classList.remove('page_lock');
    }

    return (
        <div className={`navigation ${isOpenMenuNavigation ? 'navigation_active': ''}`} onClick={handleShowMenu}>
            <nav className={`navigation__menu ${isOpenMenuNavigation ? 'navigation__menu_active' : ''}`}
                 onClick={event => event.stopPropagation()}>
                <ul className="navigation__menu-unordered-list">
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка настройки"
                             src={pathGearIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            Настройки
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка архива"
                             src={pathArchiveIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            Архив
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка часов"
                             src={pathClockIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            Ваши действия
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка QR-кода"
                             src={pathQrCodeIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            GR-код
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка заметок"
                             src={pathNotesIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            Сохранённые
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка списка"
                             src={pathListIcon}
                        />
                        <a href="#h" className="navigation__menu-link-item">
                            Близкие друзья
                        </a>
                    </li>
                    <li className="navigation__menu-list-item">
                        <img className="navigation__menu-icon-item"
                             alt="Иконка сертификата"
                             src={pathCertificate}
                        />
                        <a href="#" className="navigation__menu-link-item">
                            Центр информации о COVID-19
                        </a>
                    </li>
                    <button className="navigation__button"
                        onClick={handleSignOut}
                    >
                        Выйти из аккаунта
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;