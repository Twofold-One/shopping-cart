import styles from './styles/Cart.module.scss';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ guitarCart }: any) => {
    const renderGuitarCart = () => {
        return guitarCart.map((guitar: any) => {
            return (
                <div>
                    <CartItem
                        key={guitar.id}
                        id={guitar.id}
                        name={guitar.name}
                        price={guitar.price}
                        image={guitar.image}
                        description={guitar.description}
                    />
                </div>
            );
        });
    };

    return (
        <div className={styles.Cart}>
            <h1>Your guitar cart</h1>
            {renderGuitarCart()}
            <div className={styles.total}>
                <p>Total: $10000</p>
                <button>Checkout</button>
                <Link to="/shop">
                    <button className="continue-button">
                        Continue shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
