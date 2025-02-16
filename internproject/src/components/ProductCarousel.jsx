import React, { useState } from 'react';
import { Box, IconButton, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ProductCarousel = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  const getImagesForColor = (color) => {
    const colorImages = {
      White: [
        "/images/product0101.jpg",
        "/images/product0102.jpg",
        "/images/product0103.jpg"
      ],
      Black: [
        "/images/product0201.jpg",
        "/images/product0202.jpg",
        "/images/product0203.jpg"
      ],
      Red: [
        "/images/product0301.jpg",
        "/images/product0302.jpg",
        "/images/product0303.jpg"
      ]
    };
    return colorImages[color] || product.images;
  };

  const currentImages = getImagesForColor(selectedColor);

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      {/* Main Image and Arrows Container */}
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '350px', md: '400px' }, // Responsive height
        maxWidth: '500px', // Maximum width to prevent overflow
        mx: 'auto' // Center the container
      }}>
        <Box sx={{ 
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.1)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
            pointerEvents: 'none'
          }
        }}>
          <img
            src={currentImages[selectedImage]}
            alt={`Product view ${selectedImage + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '16px'
            }}
          />
        </Box>
        
        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>

      {/* Color Selection */}
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mt: 2,
        justifyContent: 'center'
      }}>
        <span style={{ 
          fontSize: '0.875rem',
          fontWeight: 500 
        }}>
          Color:
        </span>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {product.colors.map((color) => (
            <Button
              key={color}
              onClick={() => {
                setSelectedColor(color);
                setSelectedImage(0);
              }}
              sx={{
                minWidth: '30px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: color.toLowerCase(),
                border: '1px solid #000',
                outline: selectedColor === color ? '2px solid #3b82f6' : 'none',
                outlineOffset: '2px',
                ...(color.toLowerCase() === 'white' && {
                  border: '2px solid #000',
                }),
                '&:hover': {
                  backgroundColor: color.toLowerCase(),
                  opacity: 0.9,
                },
                padding: 0,
                margin: 1
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCarousel;