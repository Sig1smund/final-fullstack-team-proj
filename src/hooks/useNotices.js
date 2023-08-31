import { useSelector } from 'react-redux';
import { selectNotices, selectIsNoticesLoading, selectFilters } from 'redux/notices/selectors';
import { selectIsDeleting } from 'redux/auth/selectors';


export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);
  const filters = useSelector(selectFilters);
  const isDeleting = useSelector(selectIsDeleting);

  return {
    notices,
    isLoading,
    filters,
    isDeleting,
  };
}
