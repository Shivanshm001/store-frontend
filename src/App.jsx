import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { AddProduct } from './components/AddProduct/AddProduct'
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct'
import { useDocumentTitle } from './hooks/useDocumentTitle'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import {Category} from './components/Category/Category'
import { Home } from './components/Home/Home'



export function App() {
  useDocumentTitle("Store")
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Category />} />
          <Route element={<RequireAuth />}>
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:productID' element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
