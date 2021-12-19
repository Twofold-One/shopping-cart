import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from './styles/CartItem.module.scss';

const CartItem = ({ id, name, price, image, description }: any) => {
    return (
        <div className={styles.CartItem}>
            <img src={image} alt="" />
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>${price}</p>
                <div className={styles.quantity}>
                    <button>
                        <AiOutlineMinus />
                    </button>
                    <input type="text" defaultValue="1"></input>
                    <button>
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
