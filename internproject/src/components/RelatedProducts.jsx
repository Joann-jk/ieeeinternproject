import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "Gym Cotton Wear",
      price: 89.99,
      image: "/images/product0401.jpg"
    },
    {
      id: 2,
      name: "Casual Linen T-Shirt",
      price: 79.99,
      image: "/images/product0402.jpg"
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      price: 99.99,
      image: "/images/product0403.jpg"
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Related Products</Typography>
      <Grid container spacing={3}>
        {relatedProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="subtitle1" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;