import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-pb8lkcxo1t0k5mk6.us.auth0.com
// 5AoCbzoufSl4Z3LtDsRe3EHnv01yQJcV
root.render(
    <Auth0Provider 
        domain="dev-pb8lkcxo1t0k5mk6.us.auth0.com"
        clientId="5AoCbzoufSl4Z3LtDsRe3EHnv01yQJcV"
        
        authorizationParams={{
        redirect_uri: window.location.origin
    }}>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
