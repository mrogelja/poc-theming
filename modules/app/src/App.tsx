
import { createTheme, injectTheme } from '@tdms/theme';
import { Button } from './Button/Button';
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
