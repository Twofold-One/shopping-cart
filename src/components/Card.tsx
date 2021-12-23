import styles from './styles/Card.module.scss';
import { CardProps } from '../interfaces/general';
import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const Card = ({
    guitarType,
    id,
    name,
    price,
    image,
    description,
    handleAddToCartClick,
}: CardProps) => {
    useEffect(() => {
        // hint to bind tooltip to dynamic content
        ReactTooltip.rebuild();
        return () => {};
    });

    const onAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id;
        const guitartype = e.currentTarget.dataset.guitartype;
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
            <p
                data-tip
                data-for={`${guitarType} ${String(id)}`}
                id={String(id)}
            >
                DESCRIPTION
            </p>
            <ReactTooltip
                id={`${guitarType} ${String(id)}`}
                place="top"
                className={styles.tooltip}
                effect="solid"
            >
                <div>{description}</div>
            </ReactTooltip>
        </div>
    );
};

export default Card;
