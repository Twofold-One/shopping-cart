import styles from './styles/Shop.module.scss';
import { data } from '../data/guitars_data';
import Card from '../components/Card';

const Shop = () => {
    return (
        <div className={styles.Shop}>
            {data.electric.map((item) => {
                return (
                    <Card key={item.id} name={item.name} image={item.image} />
                );
            })}
        </div>
    );
};

export default Shop;
