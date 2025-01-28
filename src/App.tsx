import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sobre' element={<Sobre></Sobre>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
