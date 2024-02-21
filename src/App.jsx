import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { AddProduct } from './components/AddProduct/AddProduct';
import Layout from './components/Layout/Layout';

//Auth
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth';

import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct';

//Hooks
import { useDocumentTitle } from './hooks/useDocumentTitle';

//Pages
import { Cart } from './components/Pages/Cart/Cart';
import { Checkout } from './components/Pages/Checkout/Checkout';
import { NavPages } from './components/Pages/NavPages';
import { Wishlist } from './components/Pages/Wishlist/Wishlist';
import { ShopPage } from './components/Shop/Shop';
import { About } from './components/About/About';
import { SingleProduct } from './components/SingleProduct/SingleProduct';


//Route enums
import { ABOUT, ADD_PRODUCT, CART, CHECKOUT_DETAILS, CHECKOUT_PAYMENT, CONTACT, DEFAULT, HOME, LOGIN, REGISTER, SHOP, SINGLE_PRODUCT, UPDATE_PRODUCT, WISHLIST } from './config/urlPaths';
import { Payment } from './components/Pages/Checkout/Payment/Payment';

export function App() {
  useDocumentTitle("Store");
  return (
    <>
      <Routes>
        <Route path={DEFAULT} element={<Layout />} >
          <Route path={HOME} element={<Home />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={SINGLE_PRODUCT} element={<SingleProduct />} />

          <Route path={HOME} element={<NavPages />} >
            <Route path={WISHLIST} element={<Wishlist />} />
            <Route path={CART} element={<Cart />} />
            <Route path={SHOP} element={<ShopPage />} />

            <>
              <Route path={CHECKOUT_DETAILS} element={<Checkout />} />
              <Route path={CHECKOUT_PAYMENT} element={<Payment />} />
            </>

            <Route path={REGISTER} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>


          <Route element={<RequireAuth />}>
            <Route path={ADD_PRODUCT} element={<AddProduct />} />
            <Route path={UPDATE_PRODUCT} element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
