import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import Button from '@/components/Button/Button';

import styles from './SidebarButton.module.scss';

interface Props {
  children: React.ReactNode;
  to: string;
  active: boolean;
}

const SidebarButton: FunctionComponent<Props> = ({ children, to, active }) => {

  const buttonStyles = active ? [styles.Button, styles.ButtonActive] : [styles.Button];

  return (
    <div className={styles.SidebarButton}>
      <Button style={buttonStyles}>
        <Link href={to}>
          <a>{children}</a>
        </Link>
      </Button>
    </div>
  );
};

export default SidebarButton;
