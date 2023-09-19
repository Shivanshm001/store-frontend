import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { AddProduct } from './components/AddProduct/AddProduct'
import { Category } from './components/Category/Category'
import { Home } from './components/Home/Home'
import Layout from './components/Layout/Layout'
import { Pages } from './components/Pages/Pages'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct'


import { useDocumentTitle } from './hooks/useDocumentTitle'


export function App() {
  useDocumentTitle("Store")
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Category />} />
            <Route path='/:page' element={<Pages />} />
          <Route element={<RequireAuth />}>
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:productID' element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
