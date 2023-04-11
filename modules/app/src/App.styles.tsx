import { css } from '@linaria/core';

export const styles = {
  root: css`
    cursor: pointer;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: ;
    font-weight: 500;
    background-color: var(--background-color-0);
    color: white;

    @media (prefers-color-scheme: light) {
      background-color: var(--background-color-0);
      color: var(--color-primary);
    }
  `
};
