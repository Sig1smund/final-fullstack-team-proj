import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/selectors';

export default function useNews() {
  const news = useSelector(selectAllNews);

  return {
    news,
  };
}
