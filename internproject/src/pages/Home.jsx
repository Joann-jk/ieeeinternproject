import React from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/product');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3, #FFF1F2)'
    }}>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar sx={{ maxWidth: 'xl', width: '100%', margin: '0 auto' }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #9333EA, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Fashion Brand
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {['Home', 'Collection', 'About', 'Contact'].map((item) => (
            <Button 
              key={item} 
              sx={{ 
                ml: 3,
                color: 'text.primary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="lg" 
        sx={{ 
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8
        }}
      >
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography 
            variant="h2" 
            component="h1"
            sx={{
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to right, #9333EA, #DB2777, #EF4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Elevate Your Style With our Brand
          </Typography>

          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{ maxWidth: '800px', mb: 4 }}
          >
            Discover our curated collection of premium clothing that blends timeless elegance 
            with contemporary fashion. Each piece tells a unique story of craftsmanship and style.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button 
              variant="contained"
              size="large"
              onClick={handleExploreClick}
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: '50px',
                background: 'linear-gradient(to right, #9333EA, #DB2777)',
                '&:hover': {
                  background: 'linear-gradient(to right, #7E22CE, #BE185D)'
                }
              }}
            >
              Explore Collection
            </Button>
            
            <Button 
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: '50px',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              Learn More
            </Button>
          </Stack>

          <Stack 
            direction="row" 
            spacing={8} 
            sx={{ mt: 8 }}
          >
            {[
              { number: '1000+', label: 'Products' },
              { number: '50+', label: 'Brands' },
              { number: '100k+', label: 'Happy Customers' }
            ].map((stat) => (
              <Box key={stat.label} textAlign="center">
                <Typography 
                  variant="h4" 
                  sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #9333EA, #DB2777)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;