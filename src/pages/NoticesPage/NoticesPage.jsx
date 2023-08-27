import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNotices } from 'redux/notices/operations'

import NoticesSearch from '../../components/NoticesSearch'
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav'
import NoticesFilters from '../../components/NoticesFilters'
import NoticesCategoriesList from '../../components/NoticesCategoriesList'
import AddPetPage from '../../components/AddPetForm'
import useAuth from 'hooks';
import styles from './NoticesPage.module.css'

export default function NoticesPage() {

    const { isLoggedIn } = useAuth();
    const { categoryName } = useParams();
    const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryName) {
          dispatch(getNotices(categoryName))
          navigate(`/notices/${categoryName}`);
        }
      }, [categoryName, navigate, dispatch]);

    return <div className={styles.container}>
    <h1 className={styles.title}>Find your favorite pet</h1>
    <NoticesSearch/>
    <div className={styles.navDesktopContainer}>
    <NoticesCategoriesNav/>
    <NoticesFilters/>
    {isLoggedIn && <AddPetPage/>}
    </div>
    <Outlet/>
    {categoryName && <NoticesCategoriesList/>}
    </div>
}