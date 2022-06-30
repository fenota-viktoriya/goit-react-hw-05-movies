import { GrLinkPrevious } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

export const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/movies'}>
      <GrLinkPrevious />
    </Link>
  );
};
