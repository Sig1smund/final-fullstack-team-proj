import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "redux/news/operations";
import useNews from "hooks/useNews";
import NewsList from "components/NewsList";
import Spinner from "utils/Spinner";
import s from './NewsPage.module.css';

export default function NewsPage() {
    const dispatch = useDispatch();
    const { news } = useNews();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    return (
        <section className={s.container}>
            <h1 className={s.sectionTitle}>News</h1>
            {!news
                ? <Spinner />
                : <NewsList />
            }
        </section>
    );
}