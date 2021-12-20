import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from './styles/CartItem.module.scss';

const CartItem = ({ id, name, price, image, description, quantity }: any) => {
    const handleInputChange = () => {};

    // todo increment and decrement functionality
    const onIncrementButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.dataset.name;
        console.log(name);
    };
    const onDecrementButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.dataset.name;
        console.log(name);
    };

    return (
        <div className={styles.CartItem}>
            <img src={image} alt="" />
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>${price * quantity}</p>
                <div className={styles.quantity}>
                    <button data-name={name} onClick={onDecrementButtonClick}>
                        <AiOutlineMinus />
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        onChange={handleInputChange}
                    ></input>
                    <button data-name={name} onClick={onIncrementButtonClick}>
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
