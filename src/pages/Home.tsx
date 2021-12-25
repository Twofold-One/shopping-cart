import styles from './styles/Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.Home}>
            <h1>Welcome!</h1>
            <p>
                We've got some of the biggest brands in stock, including Fender,
                Gibson, Jackson, Dean, Ibanez, as well as our own great value
                Guitar Shop music product range.
            </p>
            <Link to="/shopping-cart/shop">
                <button>SHOP NOW</button>
            </Link>
        </div>
    );
};

export default Home;
