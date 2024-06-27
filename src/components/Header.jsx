import  { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SearchResults from './SearchResults';
import categoriesData from '../data/categories.json';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '0ch',
      },
    },
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('Search term:', searchTerm);
    if (searchTerm.length > 1) {
      const results = searchCategories(searchTerm);
      console.log('Search results:', results);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const searchCategories = (term) => {
    console.log('Searching categories for:', term);
    const results = [];
    const search = (categories, path = []) => {
      categories.forEach(category => {
        if (category.name.toLowerCase().includes(term.toLowerCase())) {
          results.push({ ...category, path: [...path, category.name] });
        }
        if (category.subcategories) {
          search(category.subcategories, [...path, category.name]);
        }
      });
    };
    search(categoriesData.categories);
    return results;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Website
          </Typography>
          <SearchContainer>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search categories…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Search>
            {searchResults.length > 0 && (
              <SearchResults results={searchResults} />
            )}
          </SearchContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;