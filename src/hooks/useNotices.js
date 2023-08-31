import { useSelector } from 'react-redux';
import {
  selectNotices,
  selectIsNoticesLoading,
  selectIsDeleting,
  selectTotal,
} from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);
  const isDeleting = useSelector(selectIsDeleting);
  const total = useSelector(selectTotal);

  return {
    notices,
    isLoading,
    isDeleting,
    total,
  };
}
