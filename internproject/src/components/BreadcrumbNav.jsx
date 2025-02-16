import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
const BreadcrumbNav = () => {
  return (
    <Breadcrumbs className="p-4">
      <Link color="inherit" href="/">Home</Link>
      <Link color="inherit" href="/clothing">Clothing</Link>
      <Typography color="text.primary">Shirts</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbNav;