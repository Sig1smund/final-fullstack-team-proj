import NoticesSearch from '../../components/NoticesSearch'
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav'
import NoticesFilters from '../../components/NoticesFilters'
import NoticesCategoriesList from '../../components/NoticesCategoriesList'
import AddPetForm from '../../components/AddPetForm'
import useAuth from 'hooks';
import styles from './NoticesPage.module.css'

export default function NoticesPage() {
    const { isLoggedIn } = useAuth();

    return <div className={styles.container}>
    <h1 className={styles.title}>Find your favorite pet</h1>
    <NoticesSearch/>
    <NoticesCategoriesNav/>
    <NoticesFilters/>
    {isLoggedIn && <AddPetForm/>}
    <NoticesCategoriesList/>
    </div>
}