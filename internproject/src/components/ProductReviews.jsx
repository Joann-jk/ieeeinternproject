import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const ProductReviews = () => {
  const ratingDistribution = [
    { rating: 5, count: 75 },
    { rating: 4, count: 32 },
    { rating: 3, count: 12 },
    { rating: 2, count: 6 },
    { rating: 1, count: 3 }
  ];

  const reviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2024-02-10",
      comment: "Excellent quality and perfect fit! Would definitely recommend."
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2024-02-08",
      comment: "Good product but shipping took longer than expected."
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Customer Reviews</Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Rating Distribution</Typography>
        {ratingDistribution.map(({ rating, count }) => (
          <Box key={rating} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography sx={{ minWidth: 50 }}>{rating} stars</Typography>
            <LinearProgress 
              variant="determinate" 
              value={(count / 128) * 100} 
              sx={{ flexGrow: 1 }}
            />
            <Typography sx={{ minWidth: 50 }}>{count}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box>
        {reviews.map(review => (
          <Paper key={review.id} sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Avatar>{review.user[0]}</Avatar>
              <Typography variant="subtitle1">{review.user}</Typography>
            </Box>
            <Rating value={review.rating} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {new Date(review.date).toLocaleDateString()}
            </Typography>
            <Typography>{review.comment}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ProductReviews;