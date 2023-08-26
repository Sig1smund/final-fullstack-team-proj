import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Spinner from 'utils/Spinner';

// import styles from "./SharedLayout.module.css";

export default function SharedLayout() {
  return (
    // <div className={styles.container}>
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
    // </div>
  );
}
