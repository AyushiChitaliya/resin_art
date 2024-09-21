import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import c_1 from '../Componets/image/Candle/c_1.png';
import c_main from '../Componets/image/Candle/c_9.jpg'
import c_2 from '../Componets/image/Candle/c_2.jpg';
import c_3 from '../Componets/image/Candle/c_3.webp';
import c_4 from '../Componets/image/Candle/c_4.jpg';
import c_5 from '../Componets/image/Candle/c_5.jpg';
import c_6 from '../Componets/image/Candle/c_6.jpg';
import c_7 from '../Componets/image/Candle/c_7.webp';
import c_8 from '../Componets/image/Candle/c_8.jpg';
import c_9 from '../Componets/image//Candle/c_main.jpg';
import c_10 from '../Componets/image/Candle/c_10.jpg';
import c_11 from '../Componets/image/Candle/c_11.jpg';
import c_12 from '../Componets/image/Candle/c_12.jpg';
import c_13 from '../Componets/image/Candle/c_13.jpg';
import c_14 from '../Componets/image/Candle/c_14.jpg';
import c_15 from '../Componets/image/Candle/c_15.jpg';
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
  backgroundImage: `url(${c_main})`, // Replace with your image URL
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
    image: c_1,
    title: 'Seashell Serenity Candle',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '13 review',
  },
  {
    discount: '5%',
    image: c_9,
    title: 'Ocean Wave Candle',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '94 review',
  },
  {
    discount: '14%',
    image: c_2,
    title: 'Golden Branch Candle',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '73 review',
  },
  {
    image: c_3,
    title: 'Rustic Charm Candle Holder',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '62 review',
  },
  {
    discount: '6%',
    image: c_4,
    title: 'Crimson Elegance Candle Set',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '52 review',
  },
  {
    image: c_5,
    title: 'Vintage Chic Candle Holder',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '85 review',
  },
  {
    discount: '14%',
    image: c_6,
    title: 'Woodland Log Candle Holder',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '15 review',
  },
  {
    image: c_7,
    title: 'Antique Brass Candle Holder',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '74 review',
  },
  {
    discount: '3%',
    image: c_8,
    title: 'Rustic Wood Candle Holder',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '42 review',
  },
  {
    discount: '5%',
    image: c_main,
    title: 'Mosaic Candle Holder',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '84 review',
  },
  {
    discount: '7%',
    image: c_10,
    title: 'Stone Pebble Candle Holder',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '25 review',
  },
  {
    image: c_11,
    title: 'Log Candle Holder',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '35 review',
  },
  {
    image: c_12,
    title: 'Birch Wood Candle Holder Set',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '54 review',
  },
  {
    discount: '8%',
    image: c_13,
    title: 'Layered Sand Candle Holder',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '94 review',
  },
  {
    discount: '10%',
    image: c_14,
    title: 'Textured White Candle Holder',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '25 review',
  },
  {
    image: c_15,
    title: 'Shell Candle Holder Set',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '29 review',
  },

];


function Candle() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Kaushan Script", cursive' }}>
              "Turn your home into a haven with the warm glow of candlelight."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: '"Merriweather", serif' }}>
              "Light a candle and let your dreams take flight."
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
                <CardMedia component="img" sx={{ height: '400px', width: '100%' }} image={product.image} title={product.title} />
                <CardContent>
                  <Typography variant="body1" gutterBottom sx={{ fontFamily: '"Kaushan Script", cursive' }}>
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
                      <Typography variant="body2" sx={{ fontFamily: '"Merriweather", serif' }}>
                        ⭐ {product.reviews}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
                <ProductActions>
                  <IconButton sx={{ color: 'red' }}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <AddShoppingCartIcon />
                  </IconButton>
                </ProductActions>
                <CustomButton variant="contained" className='btn' sx={{ left: '36%', borderRadius: '20px' }}>Shop Now</CustomButton>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
        <Box className='white_space2'></Box>
        {/* <Footer /> */}
      </Box>
    </div>
  );
}

export default Candle;
