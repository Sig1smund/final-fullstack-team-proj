import NoticesCategoriesList from 'components/NoticesCategoriesList'
// поки не викоритовуются, якщо треба можна буде розкоментува
// import NoticesCategoriesNav from 'components/NoticesCategoriesNav'
// import NoticesFilters from 'components/NoticesFilters'
import NoticesSearch from '../../components/NoticesSearch'
import styles from './NoticesPage.module.css'

export default function NoticesPage() {
    return <div className={styles.container}>
    <h1 className={styles.title}>Find your favorite pet</h1>
        <NoticesSearch />
        <NoticesCategoriesList/>
        
    </div>
}