import './App.css';
import ForgotPassword from './components/auth/forgotPassword';
import Login from './components/auth/login';
import UpdatePassword from './components/auth/updatePassword';
import UserList from './components/dashboard/charts/usersList';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/dashboard/Profile/profile';
import Account from './components/dashboard/Profile/account';
import Services from './components/dashboard/Pages/Admin/services/Services';
import About from './components/dashboard/Pages/Admin/About/About';
import Reports from './components/dashboard/Pages/Admin/Reports/Reports';
import RolesManagement from './components/dashboard/Pages/Admin/RoleManagement/RoleManagement';
import Signup from './components/auth/signup';
import Footer from './components/Common/Footer';
import Chat from './components/dashboard/Pages/Admin/chats/Chat';
import Setting from './components/dashboard/Pages/Admin/settings/Setting';
import ProtectedRoute from './components/Routes/ProtectedRoute ';
import { useEffect, useState } from 'react';
import PublicRoute from './components/Routes/PublicRoute ';

const App = () => {
  const [user, setUser] = useState(null);
  const LoggedInUser = localStorage.getItem("LoggedInUser");

  useEffect(() => {
    if (LoggedInUser) {
      setUser(JSON.parse(LoggedInUser));
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<PublicRoute element={Login} />} />
        <Route path='/' element={<PublicRoute element={Login} />} />
        <Route path='/signup' element={<PublicRoute element={Signup} />} />
        <Route path='/*' element={<PublicRoute element={Login} />} />
        <Route path='/forgot-password' element={<PublicRoute element={ForgotPassword} />} />
        <Route path='/update-password' element={<PublicRoute element={UpdatePassword} />} />

        <Route path='/user' element={<ProtectedRoute element={UserList} />} />
        <Route path='/role' element={<ProtectedRoute element={RolesManagement} />} />
        <Route path='/chat' element={<ProtectedRoute element={Chat} />} />
        <Route path='/report' element={<ProtectedRoute element={Reports} />} />
        <Route path='/about' element={<ProtectedRoute element={About} />} />
        <Route path='/setting' element={<ProtectedRoute element={Setting} />} />
        <Route path='/service' element={<ProtectedRoute element={Services} />} />

        <Route path='/dashboard/profile' element={<ProtectedRoute element={Profile} />} />
        <Route path='/dashboard/account' element={<ProtectedRoute element={Account} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
