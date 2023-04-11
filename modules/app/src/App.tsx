
import { createTheme, injectTheme } from '@poc/theme';
import { Button } from '@poc/components';
import { styles } from './App.styles';

const theme = createTheme();
injectTheme(theme);

function App() {
  return (
    <div className={styles.root}>
      <Button />
    </div>
  );
}

export default App;
