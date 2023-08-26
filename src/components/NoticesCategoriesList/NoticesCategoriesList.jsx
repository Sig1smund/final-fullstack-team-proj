import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useNotices from "hooks/useNotices";

export default function NoticesCategoriesList() {
    const [category, setCategory] = useState('');
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const { notices } = useNotices();
  
    useEffect(() => {
        if (!items.length) {
            setItems([...notices])
        }
    }, [items.length, notices]);
  
    return (
        <ul>
            {items.length && items.map(item => {
                return (<li key={item._id}>
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <img src={item.imageURL} alt={item.name} width='300'/>
                </li>
                )
            })}
        </ul>
    );
}