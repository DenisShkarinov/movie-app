import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './Components/Header/Header'
import Homepage from './Pages/Home'
import Movies from './Pages/Movies'
import ProfilePage from './Pages/Profile'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/profile" element={<ProfilePage/> }></Route>
        <Route path="/movies" element={<Movies/> }></Route>
      </Routes>
    </>
  );
}

export default App;