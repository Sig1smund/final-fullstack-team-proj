import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "redux/news/operations";
import useNews from "hooks/useNews";
import NewsList from "components/NewsList";
import NewsSearch from "components/NewsSearch";
import Spinner from "utils/Spinner";
import s from './NewsPage.module.css';

export default function NewsPage() {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();
    const { news } = useNews();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const handleSearch = data => {
        setFilter(data);
    }

    return (
        <section className={s.container}>
            <h1 className={s.sectionTitle}>News</h1>
            <NewsSearch search={handleSearch}/>
            {!news
                ? <Spinner />
                : <NewsList search={filter} />
            }
        </section>
    );
}