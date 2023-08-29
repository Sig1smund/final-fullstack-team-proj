import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selecAllFavorites,
} from 'redux/auth/selectors';

export default function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const favorites = useSelector(selecAllFavorites);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    favorites,
  };
}
