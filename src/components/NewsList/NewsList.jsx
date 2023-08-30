import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/news/selectors";
import useNews from "hooks/useNews";
import s from './NewsList.module.css';

export default function NewsList() {
    const { news } = useNews();
    const filtered = useSelector(selectFilter);

    const prepeareSearch = useMemo(
        () => () => {
            if (!news) { return }
            const normalizedSearch = filtered.toLowerCase().trim();
            return news
                .filter(
                    item => item.title.toLowerCase().includes(normalizedSearch)
                );
    
        }, [filtered, news]);

    const readyToRenderNews = prepeareSearch();
        
    return (
        <>
            {!readyToRenderNews.length && <h3 className={s.noNews}>There're no news for now</h3>}
            <ul className={s.list}>
           
                {readyToRenderNews.map(item => {
                    return (
                        <li key={item._id} className={s.item}>
                            <div className={s.thumb}>
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <img src={item.imgUrl} alt={item.title} className={s.image} />
                                </a>
                            </div>
                            <div className={s.infoContainer}>
                                <div className={s.main}>
                                    <h2 className={s.title}>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            
                                <div className={s.info}>
                                    <p>{item.date.split('T')[0]}</p>
                                    <a href={item.url} className={s.itemLink} target="_blank" rel="noreferrer">
                                        <p>Read more</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
    