import React, { FunctionComponent } from 'react';

import styles from './Card.module.scss';

interface Props {
  imgLink: string;
  children: React.ReactNode;
}

const Card: FunctionComponent<Props> = ({ imgLink, children }) => {
  return (
    <div className={styles.Card}>
      <img src={imgLink}></img>
      <div className={styles.Body}>{children}</div>
    </div>
  );
};

export default Card;
