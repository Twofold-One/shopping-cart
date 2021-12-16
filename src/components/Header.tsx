import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';

const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>Shop App</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
