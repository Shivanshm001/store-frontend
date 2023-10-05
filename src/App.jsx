import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { AddProduct } from './components/AddProduct/AddProduct';
import Layout from './components/Layout/Layout';

//Auth
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register'
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth';

import { Category } from './components/Category/Category';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct';

//Hooks
import { useDocumentTitle } from './hooks/useDocumentTitle';

//Pages
import { Cart } from './components/Pages/Cart/Cart';
import { Checkout } from './components/Pages/Checkout/Checkout';
import { Pages } from './components/Pages/Pages';
import { Saved } from './components/Pages/Saved/Saved';
import { Shop } from './components/Shop/Shop';


export function App() {
  useDocumentTitle("Store");
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/category/:category' element={<Category />} />
          <Route path='/' element={<Pages />} >
            <Route path='/saved' element={<Saved />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>


          <Route element={<RequireAuth />}>
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:productID' element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
