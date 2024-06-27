/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandableCategory from './ExpandableCategory';

const MenuWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    overflowX: 'auto',
}));

function CategoryMenu({ categories }) {
  return (
    <Paper elevation={3}>
      <MenuWrapper>
        {categories.map((category) => (
          <ExpandableCategory
            key={category.id}
            category={category}
          />
        ))}
      </MenuWrapper>
    </Paper>
  );
}

export default CategoryMenu;