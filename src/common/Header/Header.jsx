import './Header.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({
    handleShowPopup,
    handleShowMenu,
}) => {

    const history = useHistory();

    const myUserId = useSelector((state) => state.loggedInUser.value);
    const currentUser = useSelector((state) => state.currentUser.value);

    const handleBackOnPage = () => {
        history.goBack();
    }

    return (
        <header className='header'>
            {
                history.location.pathname === `/${myUserId}` &&
                    <>
                        <div className="header__content">
                            <p className="header__id-profile">{currentUser._id}</p>
                            <div className="header__button-wrapper">
                                <button className="header__button header__button-add-card"
                                        onClick={handleShowPopup}
                                />
                                <button className="header__button header__button-menu"
                                        onClick={handleShowMenu}
                                />
                            </div>
                        </div>
                    </>
            }


            {history.location.pathname !== `/${myUserId}` &&
                <div className="header__publications-wrapper">

                    {history.location.pathname === currentUser.userId &&
                    `/${myUserId}` !== currentUser.userId &&
                        <>
                            <p className="header__subscribers-id-profile">{currentUser._id}</p>
                            <button className="header__subscribers-button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }

                    {
                        history.location.pathname === '/subscribers' &&
                        <>
                            <p className="header__subscribers-title">Подписчики</p>
                            <button className="header__subscribers-button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }

                    {
                        history.location.pathname === '/publications' &&
                        <>
                            <p className="header__publications-id-profile">{currentUser._id}</p>
                            <h1 className="header__publications-title">Публикации</h1>
                            <button className="header__publications-button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }

                </div>
            }
        </header>
    );
}

export default Header;