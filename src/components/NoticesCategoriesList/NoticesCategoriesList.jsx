import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getNotices} from '../../redux/notices/operations'
import NoticeCategoryItem from '../NoticeCategoryItem'
import useNotices from "hooks/useNotices";

export default function NoticesCategoriesList({category}) {
    // const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const { notices } = useNotices();

    console.log('category', category)

    useEffect(() => {
        dispatch(getNotices(category))
    }, [dispatch, category]);
  
    // useEffect(() => {
    //     if (!items.length) {
    //         setItems([...notices])
    //     }
    // }, [items.length, notices]);

    console.log('notices', notices)

  
    return (
        <ul>
            {notices.length && notices.map(item => {
                return (<NoticeCategoryItem key={item._id} item={item}/>)
            })}
        </ul>
    );
}

