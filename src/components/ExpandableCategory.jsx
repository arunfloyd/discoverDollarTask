/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Box, Typography, Collapse, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';

const CategoryItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  display: 'flex',
  alignItems: 'center',
}));

const SubcategoryList = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

function ExpandableCategory({ category, isMainCategory = true }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderSubcategories = (subcategories) => (
    <SubcategoryList>
      {subcategories.map((subcategory) => (
        <Grow
          key={subcategory.id}
          in={isHovered}
          style={{ transformOrigin: '0 0 0' }}
          {...(isHovered ? { timeout: 0 } : {})}
        >
          <div>
            <ExpandableCategory
              category={subcategory}
              isMainCategory={false}
            />
          </div>
        </Grow>
      ))}
    </SubcategoryList>
  );

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CategoryItem>
        {isMainCategory && category.image && (
          <img
            src={category.image}
            alt={category.name || 'Category'}
            style={{ width: '142px', marginRight: '8px' }}
          />
        )}
        <Typography>{category.name}</Typography>
      </CategoryItem>
      {category.subcategories && (
        <Collapse
          in={isHovered}
          timeout="auto"
          unmountOnExit
          sx={{
            position: 'absolute',
            zIndex: 1,
            minWidth: '150px',
            backgroundColor: 'background.paper',
            boxShadow: 3,
            borderRadius: 1,
            marginTop: '8px',
            overflow: 'inherit',
          }}
        >
          {renderSubcategories(category.subcategories)}
        </Collapse>
      )}
    </Box>
  );
}

export default ExpandableCategory;