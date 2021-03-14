import React, { FunctionComponent } from 'react';

import styles from './SidebarTitle.module.scss';

interface Props {
  children: React.ReactNode;
}

const SidebarTitle: FunctionComponent<Props> = ({children}) => {
  return (
    <div className={styles.SidebarTitle}>
      {children}
    </div>
  );
};

export default SidebarTitle;
