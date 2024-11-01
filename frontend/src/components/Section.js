import React from 'react'
import Products from './section/Products'
import Details from './section/Details'
import { Route, Routes } from 'react-router-dom'
import Cart from './section/Cart'

function Section() {
  return (
   <section>
    <Routes>
    <Route path="/Product" element={<Products/>}/>
    <Route path="/Product/:id" element={<Details/>}/>
    <Route path="/cart" element={<Details/>}/>
    </Routes>
   </section>
  )
}

export default Section