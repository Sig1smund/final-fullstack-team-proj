import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
