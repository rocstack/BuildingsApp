import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Sidebar from '@/components/Sidebar/Sidebar';

import styles from './Layout.module.scss';

interface Props {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.Container}>
        <Sidebar pageTitle={pageTitle} />
        <div className={styles.Main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
