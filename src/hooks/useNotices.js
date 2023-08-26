import { useSelector } from 'react-redux';
import { selectNotices } from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);

  return {
    notices,
  };
}
