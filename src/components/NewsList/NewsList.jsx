import useNews from "hooks/useNews";
import s from './NewsList.module.css';

export default function NewsList() {
    const { news } = useNews();
    console.log(news);
    return (
            <ul className={s.list}>
                {news.map(item => {
                    return (
                        <li key={item._id} className={s.item}>
                            <div className={s.thumb}>
                                <a href={item.url}>
                                    <img src={item.imgUrl} alt={item.title} className={s.image} />
                                </a>
                            </div>
                            <div className={s.main}>
                                <h2 className={s.title}>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                            
                            <div className={s.info}>
                                <p>{item.date.split('T')[0]}</p>
                                <a href={item.url}>
                                    <p>read more</p>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
    );
}
    