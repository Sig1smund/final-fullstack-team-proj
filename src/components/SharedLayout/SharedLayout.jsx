import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Spinner from 'utils/Spinner';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
