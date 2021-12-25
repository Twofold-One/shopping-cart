import styles from './styles/Cart.module.scss';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { countObjects } from '../utility_functions/cout_objects_in_array';
import { totalPrice } from '../utility_functions/count_total_price';

const Cart = ({
    guitarCart,
    handleIncrementClick,
    handleDecrementClick,
    handleInputChange,
}: any) => {
    // What does it all for?
    // In guitar cart object may repeat, so Set is used to avoid
    // repetition. But Set does not have 'map' method and
    // have to be converted back to array to use it
    const guitarCartSet = new Set(guitarCart);
    const guitarCartSetArr = Array.from(guitarCartSet);
    const renderGuitarCart = () => {
        return guitarCartSetArr.map((guitar: any) => {
            return (
                <div key={guitar.id}>
                    <CartItem
                        key={guitar.id}
                        id={guitar.id}
                        name={guitar.name}
                        price={guitar.price}
                        image={guitar.image}
                        description={guitar.description}
                        quantity={countObjects(guitarCart, guitar.name)}
                        handleIncrementClick={handleIncrementClick}
                        handleDecrementClick={handleDecrementClick}
                        handleInputChange={handleInputChange}
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
                <p>Total: ${totalPrice(guitarCart)}</p>
                <button>Checkout</button>
                <Link to="/shopping-cart/shop">
                    <button className="continue-button">
                        Continue shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
