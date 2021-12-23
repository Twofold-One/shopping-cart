import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from './styles/CartItem.module.scss';

const CartItem = ({
    id,
    name,
    price,
    image,
    description,
    quantity,
    handleIncrementClick,
    handleDecrementClick,
    handleInputChange,
}: any) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.dataset.name;
        handleInputChange(name, value);
    };

    const onIncrementButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.dataset.name;
        handleIncrementClick(name);
    };
    const onDecrementButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.dataset.name;
        handleDecrementClick(name);
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
                        type="number"
                        value={quantity}
                        data-name={name}
                        onChange={onInputChange}
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
