import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { MainView } from './components/MainView/MainView'
import { AddProduct } from './components/AddProduct/AddProduct'
import { UpdateProduct } from './components/UpdateProduct/UpdateProduct'
import { useDocumentTitle } from './hooks/useDocumentTitle'



export function App() {
  useDocumentTitle("Store")
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<MainView />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:productID' element={<UpdateProduct />} />
        </Route>
      </Routes>
    </>
  )
}
