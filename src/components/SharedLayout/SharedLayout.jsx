import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';

export default function SharedLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
