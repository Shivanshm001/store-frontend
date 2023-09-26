import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { AddProduct } from './components/AddProduct/AddProduct'
import { Category } from './components/Category/Category'
import { Home } from './components/Home/Home'
import Layout from './components/Layout/Layout'
import { Pages } from './components/Pages/Pages'
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth'
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct'


import { useDocumentTitle } from './hooks/useDocumentTitle'
import { Contact } from './components/Contact/Contact'
import pages from './json/pages.json';


import { Saved } from './components/Pages/Saved/Saved';


export function App() {
  useDocumentTitle("Store")
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />



          <Route path='/' element={<Pages />}>
            {
              Object.values(pages).map(page => {
                return <Route path={page.path} element={< page.component />} />
              })
            }
          </Route>
          <Route path='/category/:category' element={<Category />} />
          <Route path='/' element={<Pages />} >
            <Route path='/saved' element={<Saved />} />
            <Route path='/cart' element={<Cart />} />
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
