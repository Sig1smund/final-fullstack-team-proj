import NoticesSearch from '../../components/NoticesSearch'
import styles from './NoticesPage.module.css'

export default function NoticesPage() {
    return <div className={styles.container}>
    <h1 className={styles.title}>Find your favorite pet</h1>
    <NoticesSearch/>
    </div>
}