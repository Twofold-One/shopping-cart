import styles from './styles/Card.module.scss';
import { CardProps } from '../interfaces/general';
import React from 'react';

const Card = ({
    guitarType,
    id,
    name,
    price,
    image,
    description,
    handleAddToCartClick,
}: CardProps) => {
    // todo, maybe make it as a tooltip
    const onDescriptionClick = () => {
        return <Description />;
    };

    const onAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id;
        const guitartype = e.currentTarget.dataset.guitartype;
        console.log(id, guitartype);
        handleAddToCartClick(guitartype, id);
    };

    return (
        <div className={styles.Card}>
            <img src={image} alt="guitar" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button
                id={String(id)}
                data-guitartype={guitarType}
                onClick={onAddToCartClick}
            >
                ADD TO CART
            </button>
            <p id={String(id)} onClick={onDescriptionClick}>
                DESCRIPTION
            </p>
        </div>
    );
};

// todo
const Description = () => {
    return (
        <div className={styles.Description}>
            <h1>description</h1>
        </div>
    );
};

export default Card;
