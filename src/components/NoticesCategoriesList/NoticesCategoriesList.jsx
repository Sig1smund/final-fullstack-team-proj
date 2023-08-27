import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {getFavNotices, getOwnNotices} from '../../redux/notices/operations'
import NoticeCategoryItem from "../NoticeCategoryItem";
import useNotices from "hooks/useNotices";
import styles from './NoticesCategoriesList.module.css'

export default function NoticesCategoriesList() {

    const { categoryName } = useParams();
    const { notices } = useNotices();
    const dispatch = useDispatch();

    // console.log('notices', notices);

    useEffect(() => {
       if (categoryName === 'favorite') {
        dispatch(getFavNotices())
       } else if (categoryName === 'own') {
        dispatch(getOwnNotices())
       } 
          }, [categoryName, dispatch]);

    return (
        <ul className={styles.list}>
            {notices.length > 0 && notices.map(item => {
                return (<NoticeCategoryItem key={item._id} item={item}/>)
            })}
        </ul>
    );
}

