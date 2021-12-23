import styles from './styles/Shop.module.scss';
import { data } from '../data/guitars_data';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utility_functions/capitalize_first_letter';
import React from 'react';

const Shop = ({ handleAddToCartClick }: any) => {
    let params = useParams();

    // dataKeys assigned as 'data' keys type
    let dataKeys = Object.keys(data) as Array<keyof typeof data>;

    // empty array of keys purposed to be shown
    let dataToShow = [] as Array<keyof typeof data>;

    // ternary operator which according to params assigns dataToShow
    params.shopName === 'electric'
        ? (dataToShow = ['electric'])
        : params.shopName === 'bass'
        ? (dataToShow = ['bass'])
        : params.shopName === 'acoustic'
        ? (dataToShow = ['acoustic'])
        : (dataToShow = dataKeys);

    const renderLinks = () => {
        return dataKeys.map((key) => {
            return (
                <Link key={key} to={`/shop/${key}`}>
                    <h2>{capitalizeFirstLetter(key)}</h2>
                </Link>
            );
        });
    };

    const renderGuitars = () => {
        return dataToShow.map((key) => {
            return data[key].map((item) => {
                return (
                    <Card
                        guitarType={key}
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        handleAddToCartClick={handleAddToCartClick}
                    />
                );
            });
        });
    };

    return (
        <div className={styles.Shop}>
            <div className={styles.Links}>
                <Link to={`/shop`}>
                    <h2>All guitars</h2>
                </Link>
                {renderLinks()}
            </div>
            {renderGuitars()}
        </div>
    );
};

export default Shop;
