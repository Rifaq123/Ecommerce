
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Category() {
  return (
      <div className="category-container ">
    <Card sx={{ minWidth: 275 ,background: '#a4e6eb'}} className="category-body">
      <CardContent>
        <Typography  variant="h3" color="#ffffff"  >
           <p className="h3mobile"> Mobile & Accessories</p>
        </Typography>
        <Typography variant="h5" color="#ffffff" component="div" >
        <p className="h4mobile">Up To 40% OFF</p>
        </Typography>
        <Typography sx={{ mb: 1 }} color="#ffffff" >
        <p className="h5mobile">Best Selling & Latest Mobiles</p>
        </Typography>
      
      </CardContent>
     
    </Card>
    </div>
  );
}
