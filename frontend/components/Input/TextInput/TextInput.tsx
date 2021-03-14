import React, { FunctionComponent } from 'react';

import styles from './TextInput.module.scss';

interface Props {
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput: FunctionComponent<Props> = ({ changeValue, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.TextInput}
      onChange={changeValue}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
