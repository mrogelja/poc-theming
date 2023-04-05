import { css } from '@linaria/core';

export const styles = {
  root: css`
    cursor: pointer;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #1a1a1a;
    color: white;

    @media (prefers-color-scheme: light) {
      background-color: #f9f9f9;
      color: black;
    }
  `,
  countLabel: css`
    color: white;
  `,
};
