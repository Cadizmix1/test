import React from 'react'
import Cart from '.component/Cart';
import Home from '.component/Home'; 
import {CartProvider} from "react-use-cart"

function App() {
    return (
        <>
            <CartProvider>
                <Home/>
                    <Cart/>
            </CartProvider>
        
        </>
    );
}

export default App;