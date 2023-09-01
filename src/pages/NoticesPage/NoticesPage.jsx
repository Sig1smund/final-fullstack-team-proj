import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNotices, getFavNotices, getOwnNotices } from 'redux/notices/operations';
import useNotices from "hooks/useNotices";
import NoticesSearch from '../../components/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from '../../components/NoticesFilters';
import NoticesCategoriesList from '../../components/NoticesCategoriesList';
import AddPetButton from '../../components/AddPetButton';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

import styles from './NoticesPage.module.css'

export default function NoticesPage() {
  const [prevCategoryName, setPrevCategoryName] = useState('sell');
  const { notices, total } = useNotices();
  const [page, setPage] = useState(1);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate('/notices/sell')
  }, [navigate, dispatch]);
  
  useEffect(() => {
    if (categoryName !== prevCategoryName) {
      setPrevCategoryName(categoryName);
      setPage(1);
    }
    
  }, [categoryName, prevCategoryName]);

  useEffect(() => {
    if (categoryName === 'sell' || categoryName === 'lost-found' || categoryName === 'in-good-hands') {
      dispatch(getNotices({ categoryName, page }));
      navigate(`/notices/${categoryName}`);
    }
    if (categoryName === 'favorite') {
      dispatch(getFavNotices());
      navigate('/notices/favorite');
    }
    if (categoryName === 'own') {
      dispatch(getOwnNotices());
      navigate('/notices/own');
    }
    
  }, [categoryName, navigate, dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
    };
  
  const countPages = () => {
    const totalElements = Math.ceil((total) / 12)
    if (totalElements === 'Infinity' || totalElements === 0) {
      return page
    }
    return totalElements
  }
   
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find your favorite pet</h1>
      <NoticesSearch />
      <div className={styles.navContainer}>
        <div className={styles.navDesktopContainer}> <NoticesCategoriesNav />

        <div className={styles.navRightContainer}>
          <NoticesFilters />
          <div className={styles.addPetsButton_container}> <AddPetButton /></div>
        </div>
        </div>
      </div>
      <Outlet />
      {categoryName
        && <NoticesCategoriesList />
      }
      {notices.length && <div className={styles.pagination}>
        <Stack spacing={2}>
          <Pagination
            count={countPages()}
            page={page}
            onChange={handleChange}
            color='primary'
            variant="outlined"
            renderItem={(item) => (
              <PaginationItem sx={{
                border: '1px solid #54ADFF',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400'
              }}
                {...item}
              />
            )} />
        </Stack>
      </div>}
    </div>
  );
}