import ImageCard from './components/ImageCard';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <ImageCard />
      </div>
    </ThemeProvider>
  );
};

export default App;
