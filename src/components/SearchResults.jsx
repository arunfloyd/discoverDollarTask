/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ResultsWrapper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  right: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  maxHeight: '300px',
  overflowY: 'auto',
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    width: '350px',
  },
}));

function SearchResults({ results }) {
  console.log('Rendering search results:', results);
  return (
    <ResultsWrapper elevation={3}>
        
      <List>

        {results.map((result, index) => (
          <ListItem key={index} button>
            <ListItemText
              primary={result.name}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {result.path.join(' > ')}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </ResultsWrapper>
  );
}

export default SearchResults;