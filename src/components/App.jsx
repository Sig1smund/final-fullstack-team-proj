import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';

// import s from './app.module.css';

import  SharedLayout from '../components/SharedLayout';
import { RestrictedRoute } from './RedirectedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(()=> import('../pages/MainPage'));
const RegisterPage = lazy(()=> import('../pages/RegisterPage'));
const LoginPage = lazy(()=> import('../pages/LoginPage'));
// const UserPage = lazy(()=> import('../pages/UserPage'));
 const NewsPage = lazy(()=> import('../pages/NewsPage'));
// const NoticesPage = lazy(()=> import('../pages/NoticesPage'));
 const OurFriendPage = lazy(()=> import('../pages/OurFriendsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}> 
        <Route index element={<HomePage/>}/>     
        <Route path="/register" element= {
        <RestrictedRoute redirectTo='/' component={<RegisterPage/>}/>
        }/>
        <Route path="/login" element= {
        <RestrictedRoute redirectTo='/' component={<LoginPage/>}/>
        }/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/friends' element={<OurFriendPage/>}/>

      </Route>
          

    </Routes>
    )
}
