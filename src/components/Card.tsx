import styles from './styles/Card.module.scss';
import { CardProps } from '../interfaces/general';

const Card = ({ id, name, price, image, description }: CardProps) => {
    // todo
    const onDescriptionClick = () => {
        return <Description />;
    };

    return (
        <div className={styles.Card}>
            <img src={image} alt="guitar" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button id={String(id)}>ADD TO CART</button>
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
