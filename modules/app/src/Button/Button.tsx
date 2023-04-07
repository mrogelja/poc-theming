import { css } from '@linaria/core';
import { useState } from 'react';
import { styles } from './Button.styles';

const test = css`
  cursor: pointer;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: #1a1a1a;
  color: white;
`

export function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      className={styles.root}
      onClick={() => setCount((count) => count + 1)}
    >
      Click count is <span className={styles.countLabel}>{count}</span>
    </button>
  );
}
