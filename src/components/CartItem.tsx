import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from './styles/CartItem.module.scss';

const CartItem = () => {
    return (
        <div className={styles.CartItem}>
            <img
                src="https://d1aeri3ty3izns.cloudfront.net/media/53/530239/1200/preview.jpg"
                alt=""
            />
            <div>
                <h3>Bariton X100000</h3>
                <p>$3000</p>
                <div className={styles.quantity}>
                    <button>
                        <AiOutlineMinus />
                    </button>
                    <p>1</p>
                    <button>
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
