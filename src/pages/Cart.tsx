import styles from './styles/Cart.module.scss';
import CartItem from '../components/CartItem';

const Cart = () => {
    return (
        <div className={styles.Cart}>
            <h1>Your guitar cart</h1>
            <div>
                <CartItem />
            </div>
            <div className={styles.total}>
                <p>Total: $10000</p>
                <button>Checkout</button>
                <button>Continue shopping</button>
            </div>
        </div>
    );
};

export default Cart;
