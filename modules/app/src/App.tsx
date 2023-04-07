
import { css } from '@linaria/core';
import { Button } from './Button/Button';

const theme = css`
  --color-primary: #69a17b;
`;

const theme2 = css`
  --color-primary: #8513e2;
`;

function App() {
  return (
    <div className={theme2}>
      <Button />
    </div>
  );
}

export default App;
