import { useState } from 'react';
import './global_styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { data } from './data/guitars_data';
import { findObject } from './utility_functions/find_obj_in_array';

const App = () => {
    const [guitarCart, setGuitarCart] = useState<Array<any>>([]);

    const handleAddToCartClick = (
        guitartype: keyof typeof data,
        id: number
    ) => {
        const prevGuitarCart = guitarCart.slice();
        const newGuitar = data[guitartype][id];
        setGuitarCart([...prevGuitarCart, newGuitar]);
    };

    const handleIncrementClick = (name: string) => {
        const prevGuitarCart = guitarCart.slice();
        const guitarToAdd = findObject(name, guitarCart);
        setGuitarCart([...prevGuitarCart, guitarToAdd]);
    };

    const handleDecrementClick = (name: string) => {
        const prevGuitarCart = guitarCart.slice();
        const guitarToDelete = findObject(name, guitarCart);
        const indexOfGuitarToDelete = prevGuitarCart.indexOf(guitarToDelete);
        prevGuitarCart.splice(indexOfGuitarToDelete, 1);
        setGuitarCart([...prevGuitarCart]);
    };

    const handleInputChange = (name: string, value: string) => {
        const prevGuitarCart = guitarCart.slice();
        const amount = Number(value);
        const guitarToAdd = findObject(name, guitarCart);
        const indexOfGuitar = prevGuitarCart.indexOf(guitarToAdd);
        const filteredGuitarCart = prevGuitarCart.filter(
            (item) => item.name !== name
        );
        let guitarsToAdd = [];
        for (let i = 0; i < amount; i++) {
            guitarsToAdd.push(guitarToAdd);
        }
        filteredGuitarCart.splice(indexOfGuitar, 0, ...guitarsToAdd);
        setGuitarCart([...filteredGuitarCart]);
    };

    return (
        <div className="App">
            <Header guitarCart={guitarCart} />
            <div className="Main">
                <Routes>
                    <Route path="/shopping-cart" element={<Home />} />
                    <Route
                        path="/shopping-cart/shop"
                        element={
                            <Shop handleAddToCartClick={handleAddToCartClick} />
                        }
                    >
                        <Route
                            path=":shopName"
                            element={
                                <Shop
                                    handleAddToCartClick={handleAddToCartClick}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="/shopping-cart/cart"
                        element={
                            <Cart
                                guitarCart={guitarCart}
                                handleIncrementClick={handleIncrementClick}
                                handleDecrementClick={handleDecrementClick}
                                handleInputChange={handleInputChange}
                            />
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
