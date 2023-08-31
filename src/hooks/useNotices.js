import { useSelector } from 'react-redux';
import {
  selectNotices,
  selectIsNoticesLoading,
  selectIsDeleting,
  selectTotal,
  selectFilters,
} from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);
  const filters = useSelector(selectFilters);
  const isDeleting = useSelector(selectIsDeleting);
  const total = useSelector(selectTotal);

  return {
    notices,
    isLoading,
    filters,
    isDeleting,
    total,
  };
}
