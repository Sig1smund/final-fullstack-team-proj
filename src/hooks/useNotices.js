import { useSelector } from 'react-redux';
import { selectIsDeleting } from 'redux/auth/selectors';
import { selectNotices, selectIsNoticesLoading } from 'redux/notices/selectors';

export default function useNotices() {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsNoticesLoading);
  const isDeleting = useSelector(selectIsDeleting);

  return {
    notices,
    isLoading,
    isDeleting,
  };
}
