import './CardList.css';
import CardItem from "./CardItem/CardItem";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardList = ({
   userProfile
}) => {

    const history = useHistory();

    const currentUser = useSelector((state) => state.currentUser.value);

    const handleOpenCard = (url) => {
        history.push(url);
    }

    return (
        <section className="photo-cards">
            <ul className="photo-cards__unordered-list">
                {currentUser.cards.map((item) =>
                    <CardItem
                        key={item._id}
                        card={item}
                        onOpenCard={handleOpenCard}
                    />
                )}
            </ul>
        </section>
    )
}

export default CardList;