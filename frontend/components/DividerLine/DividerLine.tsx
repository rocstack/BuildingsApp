import React, { FunctionComponent } from 'react';

import styles from './DividerLine.module.scss';

interface Props {}

const DividerLine: FunctionComponent<Props> = () => {
  return <div className={styles.DividerLine} />;
};

export default DividerLine;
