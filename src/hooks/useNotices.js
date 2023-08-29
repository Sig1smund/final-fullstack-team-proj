import { useSelector } from 'react-redux';
import { selectNotices, selectIsNoticesLoading } from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);

  return {
    notices,
    isLoading,
  };
}
