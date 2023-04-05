import { useState } from 'react';
import { styles } from './Button.styles';

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
