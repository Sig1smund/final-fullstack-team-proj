import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNotices } from 'redux/notices/operations'
import useAuth from "hooks/useAuth";
import useNotices from "hooks/useNotices";
import { setFavNotice } from "redux/notices/operations";

import NoticesSearch from '../../components/NoticesSearch'
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../../components/NoticesFilters'
import NoticesCategoriesList from '../../components/NoticesCategoriesList'
import AddPetButton from '../../components/AddPetButton'
import styles from './NoticesPage.module.css'

export default function NoticesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isLoggedIn } = useAuth();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notices } = useNotices();

  useEffect(() => {
    navigate('/notices/sell')
      }, [navigate]);
  

  useEffect(() => {
    if (categoryName) {
      dispatch(getNotices({ categoryName }));
      navigate(`/notices/${categoryName}`);
        }
  }, [categoryName, navigate, dispatch]);
  

  const onFavClick = (id) => {
    isLoggedIn ? dispatch(setFavNotice(id)) : setIsModalOpen(true); 
    return console.log(id);        
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find your favorite pet</h1>
      <NoticesSearch />
      <div className={styles.navDesktopContainer}>
        <NoticesCategoriesNav />
        <div className={styles.navRightContainer}>
          <NoticesFilters />
          <AddPetButton />
        </div>
      </div>
      <Outlet />
      {categoryName && <NoticesCategoriesList favHandler={onFavClick}/>}
    </div>
  );
}