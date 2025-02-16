import React from 'react';
import { 
  Box, 
  Grid, 
  Container, 
  Typography,
  Paper
} from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import BreadcrumbNav from '../components/BreadcrumbNav.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import ProductInfo from '../components/ProductInfo.jsx';
import ProductReviews from '../components/ProductReviews.jsx';
import RelatedProducts from '../components/RelatedProducts.jsx';

const product = {
  name: "Premium Cotton Casual Shirt",
  brand: "Fashion Brand",
  images: [
    "/images/product0101.jpg",
    "/images/product0102.jpg",
    "/images/product0103.jpg",
  ],
  colors: ["Black", "White", "Red"],
  sizes: ["S", "M", "L", "XL"],
  price: {
    original: 129.99,
    sale: 99.99
  },
  rating: 4.5,
  reviewCount: 128,
  description: "Experience ultimate comfort with our Premium Cotton Casual Shirt. Made from 100% organic cotton, this shirt features a modern fit, breathable fabric, and exceptional durability. Perfect for both casual and semi-formal occasions.",
  offers: [
    "Get 10% off on your first purchase",
    "Free shipping on orders above $50",
    "Buy 2 get 1 free on selected items"
  ]
};

const ProductPage = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3, #FFF1F2)',
      pb: 8
    }}>
      <Navbar />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          pt: 4,
          '& > *': { mb: 4 }
        }}
      >
        <BreadcrumbNav />
        
        <Paper 
          elevation={0}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ProductCarousel product={product} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductInfo product={product} />
            </Grid>
          </Grid>
        </Paper>

        <Paper 
          elevation={0}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #9333EA, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Customer Reviews
          </Typography>
          <ProductReviews />
        </Paper>

        <Paper 
          elevation={0}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #9333EA, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            You May Also Like
          </Typography>
          <RelatedProducts />
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductPage;