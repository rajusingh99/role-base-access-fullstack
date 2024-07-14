import './App.css';
import ForgotPassword from './components/auth/forgotPassword';
import Login from './components/auth/login';
import UpdatePassword from './components/auth/updatePassword';
import UserList from './components/dashboard/charts/usersList';
import {Routes,Route} from 'react-router-dom'
import Profile from './components/dashboard/Profile/profile';
import Account from './components/dashboard/Profile/account';
import Services from './components/dashboard/Pages/Admin/services/Services';
import About from './components/dashboard/Pages/Admin/About/About';
import Reports from './components/dashboard/Pages/Admin/Reports/Reports';
import RolesManagement from './components/dashboard/Pages/Admin/RoleManagement/RoleManagement'
import Signup from './components/auth/signup';
import Footer from './components/Common/Footer';
import Chat from './components/dashboard/Pages/Admin/chats/Chat';
import Setting from './components/dashboard/Pages/Admin/settings/Setting';
const App = () => {

  const token = localStorage.getItem("token");

  return (
    <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/*' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/update-password' element={<UpdatePassword/>}/>

          <Route path='/users' element={<UserList/>}/>
          <Route path='/roles' element={<RolesManagement/>}/>
          <Route path='/chats' element={<Chat/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/settings' element={<Setting/>}/>
          <Route path='/services' element={<Services/>}/>

          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/account' element={<Account/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
