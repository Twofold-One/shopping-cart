import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';
import { BsCart4 } from 'react-icons/bs';

const Header = ({ guitarCart }: any) => {
    const renderCounter = () => {
        return (
            <span
                className={`${styles.counter} ${
                    guitarCart.length > 0 ? styles.show : ''
                }`}
            >
                {guitarCart.length}
            </span>
        );
    };

    return (
        <div className={styles.Header}>
            <h1>
                <a href="/shopping-cart">Guitar Shop</a>
            </h1>
            <nav>
                <ul>
                    <Link to="/shopping-cart">
                        <li>Home</li>
                    </Link>
                    <Link to="/shopping-cart/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="shopping-cart/cart">
                        <li>
                            <div className={styles.cart}>
                                <BsCart4 className={styles.icon} />
                                {renderCounter()}
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
