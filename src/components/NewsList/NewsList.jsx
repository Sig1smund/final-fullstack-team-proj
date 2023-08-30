import useNews from "hooks/useNews";
import s from './NewsList.module.css';

export default function NewsList({search}) {
    const { news } = useNews();

    const prepeareSearch = () => {
        search.toLowerCase().trim();
           return news.filter(
               item => item.title.toLowerCase().includes(search)
           );
    }

    const readyToRenderNews = prepeareSearch();
        
    return (
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
    );
}
    