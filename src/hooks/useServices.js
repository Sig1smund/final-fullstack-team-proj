import { useSelector } from 'react-redux';
import { selectAllServices, selectIsLoading } from 'redux/services/selectors';

export default function useServices() {
  const services = useSelector(selectAllServices);
  const isLoading = useSelector(selectIsLoading);

  return {
    services,
    isLoading,
  };
}
