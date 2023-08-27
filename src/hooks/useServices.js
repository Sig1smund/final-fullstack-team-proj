import { useSelector } from 'react-redux';
import { selectAllServices } from 'redux/services/selectors';

export default function useServices() {
  const services = useSelector(selectAllServices);

  return {
    services,
  };
}
