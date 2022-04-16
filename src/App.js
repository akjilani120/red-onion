
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreackFast from './Pages/BreackFast/BreackFast';
import Dinner from './Pages/Dinner/Dinner';
import MainHeader from './Pages/Header/MainHeader';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Login/SignIn/SignIn';
import Lunch from './Pages/Lunch/Lunch';

function App() {
  return (
    <div >
     <MainHeader></MainHeader>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={<BreackFast></BreackFast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        </Routes>
    </div>
  );
}

export default App;
