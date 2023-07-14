import { Header } from './components/header/Header'
import { NewProduct } from './components/newProduct/NewProduct'
import { ProductList } from './components/product-list/ProductList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/addProduct' element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
