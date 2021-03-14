import React, { FunctionComponent } from 'react';

import styles from './SidebarTop.module.scss';

interface Props {
  pageTitle: string;
}

const SidebarTop: FunctionComponent<Props> = ({ pageTitle }) => {
  return (
    <div className={styles.SidebarTop}>
      {pageTitle}
    </div>
  );
};

export default SidebarTop;
