import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';
import { BsCart4 } from 'react-icons/bs';

const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>
                <a href="/">Guitar Shop</a>
            </h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        <li>
                            <BsCart4 className={styles.cart} />
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
