import './global_styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
