import styles from './styles/Shop.module.scss';
import { data } from '../data/guitars_data';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utility_functions/capitalize_first_letter';
import React from 'react';

const Shop = () => {
    let params = useParams();
    const dataKeys = Object.keys(data);

    const handleGuitarTypeClick = (e: React.MouseEvent) => {
        console.log(params);
    };

    const renderGuitars = () => {
        // dataKeys.map((key: keyof typeof data) => {
        //     return <h1>{data[key]}</h1>;
        // });

        return data.electric.map((item) => {
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
        });
    };

    return (
        <div className={styles.Shop}>
            <div>
                <Link to={`/shop`}>
                    <h2>All guitars</h2>
                </Link>
                {Object.keys(data).map((key) => {
                    return (
                        <Link key={key} to={`/shop/${key}`}>
                            <h2 onClick={handleGuitarTypeClick}>
                                {capitalizeFirstLetter(key)}
                            </h2>
                        </Link>
                    );
                })}
            </div>
            {/* {data.electric.map((item) => {
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
            })} */}
            {renderGuitars()}
        </div>
    );
};

export default Shop;
