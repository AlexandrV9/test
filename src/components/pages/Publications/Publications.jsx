import { useSelector } from 'react-redux';

import PublicationsItem from "./PublicationsItem/PublicationsItem";
import Header from "../../../common/Header/Header";
import './Publications.css';


const Publications = () => {
    const currentUser = useSelector((state) => state.currentUser.value);
    return (
        <>
            <Header />
            <section className="publications">
                <ul className="publications__unordered-list">
                    {currentUser.cards.map((item) =>
                        <PublicationsItem
                            key={item._id}
                            card={item}
                        />
                    )}
                </ul>
            </section>
        </>

    );
}

export default Publications;