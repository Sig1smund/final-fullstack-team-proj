import { useSelector } from 'react-redux';
import { selectNotices, selectIsNoticesLoading, selectFilters } from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);
  const filters = useSelector(selectFilters);

  return {
    notices,
    isLoading,
    filters
  };
}
