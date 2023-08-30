import { useState } from "react";
import { useParams } from "react-router-dom";
import { getNotices } from "redux/notices/operations";
import useAuth from "hooks/useAuth";
import NoticeCategoryItem from "../NoticeCategoryItem";
import useNotices from "hooks/useNotices";
import Modal from "../../components/Modal";
import AttentionModal from "../../components/AttentionModal";
import { setFavNotice } from "redux/auth/operations";
import { useDispatch } from 'react-redux'
import NoPet from "../../images/WBC_sad_1.jpg";
import styles from './NoticesCategoriesList.module.css'



export default function NoticesCategoriesList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { notices } = useNotices();
    const { isLoggedIn, favorites } = useAuth();
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const favsToRender = [];
    

    const onFavClick =  async (id) => {
        if (isLoggedIn) {
            dispatch(setFavNotice(id))
            return
        } else {
            setIsModalOpen(true);
        }
        return id;
    };

    const close = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ul className={styles.list}>
                {notices.length > 0 ? (notices.map(item => {
                        return (<NoticeCategoryItem
                            key={item._id}
                            item={item}
                            favorites={favorites.includes(item._id)}
                            favHandler={onFavClick}
                        />
                        )
                    })) : (
                        <div className={styles.noPetsWrapper}>
                            <p>No pets in your list</p>
                            <img src={NoPet} alt='sad cat' className={styles.imgNoPet} />
                        </div>
                    )
                }
                
            </ul>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={close}>
                    <AttentionModal />
                </Modal>
            )
            }
        </>
    );
}