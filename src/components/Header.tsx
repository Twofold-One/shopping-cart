import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';
import { BsCart4 } from 'react-icons/bs';
import { useEffect } from 'react';

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

    useEffect(() => {
        console.log(guitarCart.length);
        return () => {};
    }, [guitarCart]);

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
