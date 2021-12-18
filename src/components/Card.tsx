import styles from './styles/Card.module.scss';

const Card = (props: any) => {
    return (
        <div className={styles.Card}>
            <h1>{props.name}</h1>
        </div>
    );
};

export default Card;
