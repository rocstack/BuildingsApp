import React, { FunctionComponent } from 'react';

import styles from './CardList.module.scss';

interface Props {
  children: React.ReactNode;
}

const CardList: FunctionComponent<Props> = ({children}) => {
  return (
    <div className={styles.CardList}>{children}</div>
  );
};

export default CardList;
