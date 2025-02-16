import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconBUtton';

import  FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import  Favorite from '@mui/icons-material/Favorite';
import  Share from '@mui/icons-material/Share';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Box className="p-4 md:p-8">
      <Typography variant="h4" className="mb-2">{product.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary" className="mb-4">
        by {product.brand}
      </Typography>

      <Box className="flex items-center gap-2 mb-4">
        <Rating value={product.rating} readOnly precision={0.5} />
        <Typography>({product.reviewCount} reviews)</Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h5" color="error" className="mb-1">
          ${product.price.sale}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="line-through">
          ${product.price.original}
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="mb-2">Size</Typography>
        <Box className="flex gap-2">
          {product.sizes.map(size => (
            <Chip
              key={size}
              label={size}
              onClick={() => setSelectedSize(size)}
              variant={selectedSize === size ? "filled" : "outlined"}
              color="primary"
            />
          ))}
        </Box>
      </Box>

      <Box className="flex gap-4 mb-6">
        <Button 
          variant="contained" 
          color="primary"
          size="large"
          className="flex-1 mt-5"
        >
          Add to Cart
        </Button>
        <IconButton
          onClick={() => setIsWishlisted(!isWishlisted)}
          color={isWishlisted ? "error" : "default"}
        >
          {isWishlisted ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="mb-2">Description</Typography>
        <Typography variant="body2" color="text.secondary">
          {showFullDescription ? product.description : `${product.description.slice(0, 150)}...`}
          <Button
            onClick={() => setShowFullDescription(!showFullDescription)}
            color="primary"
            size="small"
          >
            {showFullDescription ? 'See Less' : 'See More'}
          </Button>
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="mb-2">Available Offers</Typography>
        {product.offers.map((offer, index) => (
          <Box key={index} className="flex items-center gap-2 mb-2">
            <Chip label="OFFER" size="small" color="error" />
            <Typography variant="body2">{offer}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductInfo;
