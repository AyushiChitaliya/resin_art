import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton , Button} from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import cl_1 from '../Componets/image/Clock/img-1.jpg';
import cl_main from '../Componets/image/Clock/img-5.jpg'
import cl_2 from '../Componets/image/Clock/img-2.jpg';
import cl_3 from '../Componets/image/Clock/img-3.webp';
import cl_4 from '../Componets/image/Clock/img-4.jpg';
import cl_5 from '../Componets/image/Clock/cl_main.jpg';
import cl_6 from '../Componets/image/Clock/img-6.jpg';
import cl_7 from '../Componets/image/Clock/img-7.jpg';
import cl_8 from '../Componets/image/Clock/img-8.jpg';
import cl_9 from '../Componets/image/Clock/img-9.jpg';
import cl_10 from '../Componets/image/Clock/img-10.jpeg';
import cl_11 from '../Componets/image/Clock/img-11.jpg';
import cl_12 from '../Componets/image/Clock/img-12.jpg';
import cl_13 from '../Componets/image/Clock/img-13.jpg';
import cl_14 from '../Componets/image/Clock/img-14.jpg';
import cl_15 from '../Componets/image/Clock/img-15.png';
import Footer from '../Componets/Footer';


const BannerContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: '"Kaushan Script", cursive',
  overflow: 'hidden',
  backgroundImage: `url(${cl_8})`, // Replace with your image URL
  backgroundSize: 'cover'
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const BannerText = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

const ProductCard = styled(Card)({
  width: '100%',
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  '& .MuiCardMedia-root': {
    height: '400px',
    objectFit: 'cover',
  },
});

const DiscountBadge = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'gray',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: 'bold',
});

const ProductActions = styled(Box)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const FilterSortSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
  padding: '0 20px',
});

const CustomButton = styled(Button)({
  // marginTop: '20px',
  backgroundColor: 'white',
  marginBottom: '20px',
  color: 'black',
  '&:hover': {
      backgroundColor: 'lightgray',
  },
});

const products = [
  {
    discount: '10%',
    image: cl_1,
    title: 'Geode-Inspired Wall Clock',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '34 review',
  },
  {
    discount: '5%',
    image: cl_5,
    title: 'Marble Blue Wall Clock',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '85 review',
  },
  {
    discount: '14%',
    image: cl_2,
    title: 'Electric Blue Wall Clock',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '85 review',
  },
  {
    image: cl_3,
    title: 'Space Adventure Wall Clock',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '16 review',
  },
  {
    discount: '10%',
    image: cl_4,
    title: 'Gold and Brown Marble Clock',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '85 review',
  },
  {
    image: cl_main,
    title: 'Ocean Blue Abstract Wall Clock',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '85 review',
  },
  {
    discount: '37%',
    image: cl_6,
    title: 'Golden Veins Wall Clock',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '95 review',
  },
  {
    image: cl_7,
    title: 'Beach Theme Wall Clock',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '95 review',
  },
  {
    discount: '3%',
    image: cl_8,
    title: 'Abstract Blue Wall Clock',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '53 review',
  },
  {
    discount: '5%',
    image: cl_9,
    title: 'Purple Marble Wall Clock',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '74 review',
  },
  {
    discount: '7%',
    image: cl_10,
    title: 'Ocean Wave Wall Clock',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '26 review',
  },
  {
    image: cl_11,
    title: 'Green Ocean Theme Wall Clock',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '62 review',
  },
  {
    image: cl_12,
    title: 'Green Crystal Wall Clock',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '47 review',
  },
  {
    discount: '8%',
    image: cl_13,
    title: 'Pink Geode Wall Clock',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '72 review',
  },
  {
    discount: '10%',
    image: cl_14,
    title: 'Wood and Resin Wall Clock',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '25 review',
  },
  {
    image: cl_15,
    title: 'Button Art Wall Clock',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '72 review',
  },

];


function Clock() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
            "Clocks tell the time, but art captures the essence of the moment."
            </Typography>
            <Typography variant="h6" sx={{fontFamily: '"Merriweather", serif'}}>
            "Every second is a canvas, every minute a masterpiece."
            </Typography>
          </BannerText>
        </BannerContainer>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box className='white_space'></Box>
              <ProductCard>
                {product.discount && (
                  <DiscountBadge>
                    {product.discount}
                  </DiscountBadge>
                )}
                <CardMedia component="img" sx={{height: '400px' , width: '100%'}} image={product.image} title={product.title} />
                <CardContent>
                  <Typography variant="body1" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
                    {product.title}
                  </Typography>
                  {product.originalPrice && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="10px">
                      <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                        {product.originalPrice}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'red' }}>
                        {product.discountedPrice}
                      </Typography>
                    </Box>
                  )}
                  {product.reviews && (
                    <Box display="flex" alignItems="center" marginTop="10px" color="orange">
                      <Typography variant="body2" sx={{fontFamily: '"Merriweather", serif'}}>
                        ⭐ {product.reviews}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
                <ProductActions>
                  <IconButton sx={{color: 'red'}}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <AddShoppingCartIcon />
                  </IconButton>
                </ProductActions>
                <CustomButton variant="contained" className='btn' sx={{left: '36%', borderRadius: '20px'}}>Shop Now</CustomButton>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
          <Box className='white_space2'></Box>
        {/* <Footer/> */}
      </Box>
    </div>
  );
}

export default Clock;
