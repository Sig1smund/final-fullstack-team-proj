import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { current } from 'redux/auth/operations';
import useAuth from '../hooks';
import SharedLayout from '../components/SharedLayout';
import { RestrictedRoute } from './RedirectedRoute';
import { PrivateRoute } from './PrivateRoute';
import Spinner from 'utils/Spinner';

const HomePage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendPage = lazy(() => import('../pages/OurFriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const  NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(current());  
  }, [dispatch]);

  return (
    useAuth.isRefreshing
      ? <Spinner />
      : <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          } />
          <Route path="/user" element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          } />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<OurFriendPage />} />
          <Route path="/add-pet" element={
            <PrivateRoute redirectTo='/user' component={<AddPetPage />} />
          } />

          <Route path="/notices/favorite" element={<NoticesPage />} />
          <Route path="/notices/own" element={<NoticesPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/notices/:categoryName"  element={<NoticesPage />} /> 
          <Route path="*" element={<NotFound />}
          />

        </Route>
      </Routes >
  );
}
