import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App.jsx'

import { store } from './redux/store.js'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
