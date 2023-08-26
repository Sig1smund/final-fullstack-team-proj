import NoticesCategoriesList from 'components/NoticesCategoriesList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNotices } from 'redux/notices/operations'
// поки не викоритовуются, якщо треба можна буде розкоментува
// import NoticesCategoriesNav from 'components/NoticesCategoriesNav'
// import NoticesFilters from 'components/NoticesFilters'
import NoticesSearch from '../../components/NoticesSearch'
import styles from './NoticesPage.module.css'

export default function NoticesPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNotices())
    }, [dispatch])
    

    return <div className={styles.container}>
    <h1 className={styles.title}>Find your favorite pet</h1>
        <NoticesSearch />
        <NoticesCategoriesList/>
        
    </div>
}