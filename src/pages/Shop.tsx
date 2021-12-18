import styles from './styles/Shop.module.scss';
import { data } from '../data/guitars_data';
import Card from '../components/Card';

const Shop = () => {
    return (
        <div className={styles.Shop}>
            {data.electric.map((item) => {
                return (
                    <Card
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
};

export default Shop;
