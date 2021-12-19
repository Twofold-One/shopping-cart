import { useState, useEffect } from 'react';
import './global_styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { data } from './data/guitars_data';

const App = () => {
    const [guitarCart, setGuitarCart] = useState<Array<any>>([
        {
            id: 5,
            name: 'Dean Dimebag ML',
            price: 925,
            image: 'https://d1aeri3ty3izns.cloudfront.net/media/43/435510/1200/preview.jpg',
            description: `Feel its power. The Dean Dimebag ML is a true head turner. Featuring the iconic Dime from Hell design, it is guaranteed to make an impression onstage, and in your bedroom, and in your kitchen, and wherever else you take it. Two powerful humbuckers in the form of a Seymour Duncan Dimebucker and DMT Design ensure you get the same power and crunch that Dimebag Darrell himself enjoyed. And a set-in mahogany neck with a 'V' profile provides unstoppable playability and comfort, so you can shred without restriction. It's time to embrace your inner Dimebag and slay.`,
        },
    ]);

    useEffect(() => {
        console.log(guitarCart);
        return () => {};
    }, [guitarCart]);

    const handleAddToCartClick = (
        guitartype: keyof typeof data,
        id: number
    ) => {
        const prevGuitarCart = guitarCart.slice();
        const newGuitar = data[guitartype][id];
        setGuitarCart([...prevGuitarCart, newGuitar]);
    };
    // State

    // 1. guitar cart items added
    // 2. quantity of particular item
    // 3. total price of particular item
    // 4. total price

    return (
        <div className="App">
            <Header />
            <div className="Main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
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
                        path="/cart"
                        element={<Cart guitarCart={guitarCart} />}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
