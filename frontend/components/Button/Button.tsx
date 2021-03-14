import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  props?: any;
  style?: any;
}

const Button: FunctionComponent<Props> = ({ children, style, ...props }) => {
  return (
    <button className={[styles.Button, ...style].join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
