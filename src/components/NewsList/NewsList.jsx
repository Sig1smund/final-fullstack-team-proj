import useNews from "hooks/useNews";
import s from './NewsList.module.css';

export default function NewsList() {
        const { news } = useNews();
    return <ul className={s.list}>
        {news.map(item => {
            return (
                <li key={item._id} className={s.item}>
                    <a href={item.url}>
                        <img src={item.imgUrl} alt={item.title} width='200' />
                    </a>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </li>
            );
        })}
    </ul>
}