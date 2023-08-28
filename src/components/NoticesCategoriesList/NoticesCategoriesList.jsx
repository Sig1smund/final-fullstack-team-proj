import NoticeCategoryItem from "../NoticeCategoryItem";
import useNotices from "hooks/useNotices";
import NoPet from "../../images/WBC_sad_1.jpg";
import styles from './NoticesCategoriesList.module.css'

export default function NoticesCategoriesList({favHandler}) {

    const { notices } = useNotices();

    return (
        <ul className={styles.list}>
            {notices.length > 0 ? (notices.map(item => {
                return (<NoticeCategoryItem key={item._id} item={item} favHandler={favHandler}/>)
            })) : (
                    <div className={styles.noPetsWrapper}>
                    <p>No pets in your list</p>
                    <img src={NoPet} alt='sad cat' className={styles.imgNoPet}/>
                    </div>
                )
        }
        </ul>
    );
}

