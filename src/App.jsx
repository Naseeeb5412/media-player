import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/watch-history' element={<WatchHistory/>}/>
   </Routes>

    <Footer/>
    </>
  )
}

export default App
