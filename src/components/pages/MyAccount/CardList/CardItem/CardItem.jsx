import './CardItem.css';

const CardItem = ({
    card, onOpenCard
}) => {

    const handleOpenImage = () => {
        onOpenCard('/publications');
    }

    return (
        <li className="photo-cards__item-list">
            <img className="photo-cards__item-image"
                 alt="Изображение"
                 src={card.link}
                 onClick={handleOpenImage}
            />
        </li>
    );
}

export default CardItem;