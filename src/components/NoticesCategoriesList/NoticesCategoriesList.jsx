import { useState } from "react";
import useAuth from "hooks/useAuth";
import NoticeCategoryItem from "../NoticeCategoryItem";
import useNotices from "hooks/useNotices";
import { calculateAge } from '../NoticeCategoryItem/NoticeItemUtils';
import Modal from "../../components/Modal";
import AttentionModal from "../../components/AttentionModal";
import { setFavNotice } from "redux/auth/operations";
import { useDispatch } from 'react-redux'
import NoPet from "../../images/WBC_sad_1.jpg";
import styles from './NoticesCategoriesList.module.css'



export default function NoticesCategoriesList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { notices, filters } = useNotices();
    const { isLoggedIn, favorites } = useAuth();
    const dispatch = useDispatch();

    const preparingAge = (date) => {
        let petsAge = calculateAge(date);
        console.log('petsAge', petsAge)
        if (petsAge < 1) {
            return 'up to 1 year'
        } else if (petsAge < 2) {
            return 'up to 2 years'
        } else if (petsAge > 2) {
            return 'from 2 years'
        }
    }

    const filteredNotices = notices
    .filter(notice => {
      return (filters.gender.length === 0 || filters.gender.includes(notice.sex)) &&
      (filters.age.length === 0 || filters.age.includes(preparingAge(notice.date)))

    } 
    );

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
        {/* <ul className={styles.list}>
            {notices.length > 0 ? (notices.map(item => {
                    return (<NoticeCategoryItem
                        key={item._id}
                        item={item}
                        favorites={favorites.includes(item._id)}
                        favHandler={onFavClick}
                    /> */}
                      <ul className={styles.list}>
                        {filteredNotices.length > 0 ? (
                          filteredNotices.map(item => (
                            <NoticeCategoryItem
                              key={item._id}
                              item={item}
                              favorites={favorites.includes(item._id)}
                              favHandler={onFavClick}
                            />
                          ))
                        ) : (
                          <div className={styles.noPetsWrapper}>
                            <p>No pets match the selected filters</p>
                            <img src={NoPet} alt='sad cat' className={styles.imgNoPet} />
                          </div>
                        )}
                      </ul>
                      {isModalOpen && (
                        <Modal isOpen={isModalOpen} onClose={close}>
                          <AttentionModal />
                        </Modal>
                      )}
                    </>
                  );
                }