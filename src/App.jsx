


import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CategoryMenu from './components/CategoryMenu';
import categoriesData from './data/categories.json';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <CategoryMenu categories={categoriesData.categories} />
      <Banner/>
    </ThemeProvider>
  );
}

export default App;