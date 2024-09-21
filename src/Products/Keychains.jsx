import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import k_1 from '../Componets/image/Keychains/k_main.avif';
import k_main from '../Componets/image/Keychains/img-1.jpg'
import k_2 from '../Componets/image/Keychains/img-2.jpg';
import k_3 from '../Componets/image/Keychains/img-3.jpg';
import k_4 from '../Componets/image/Keychains/img-4.jpg';
import k_5 from '../Componets/image/Keychains/img-5.jpg';
import k_6 from '../Componets/image/Keychains/img-6.jpg';
import k_7 from '../Componets/image/Keychains/img-7.jpg';
import k_8 from '../Componets/image/Keychains/img-8.jpg';
import k_9 from '../Componets/image/Keychains/img-9.jpg';
import k_10 from '../Componets/image/Keychains/img-10.jpeg';
import k_11 from '../Componets/image/Keychains/img-11.jpg';
import k_12 from '../Componets/image/Keychains/img-12.jpeg';
import k_13 from '../Componets/image/Keychains/img-13.jpg';
import k_14 from '../Componets/image/Keychains/img-14.jpg';
import k_15 from '../Componets/image/Keychains/img-15.jpg';
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
  backgroundImage: `url(${k_main})`, // Replace with your image URL
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
    image: k_1,
    title: 'Turquoise Alphabet Keychains',
    originalPrice: '₹150.00',
    discountedPrice: '₹135.00',
    reviews: '72 review',
  },
  {
    discount: '5%',
    image: k_8,
    title: 'Seashell Keychain',
    originalPrice: '₹149.00',
    discountedPrice: '₹141.00',
    reviews: '59 review',
  },
  {
    discount: '14%',
    image: k_2,
    title: 'Pink Glitter Keychain',
    originalPrice: '₹250.00',
    discountedPrice: '₹215.00',
    reviews: '29 review',
  },
  {
    image: k_3,
    title: 'Flower Keychain with Name',
    originalPrice: '₹199.00',
    discountedPrice: '₹199.00',
    reviews: '34 review',
  },
  {
    discount: '10%',
    image: k_4,
    title: 'Paw Print Keychain',
    originalPrice: '₹249.00',
    discountedPrice: '₹224.00',
    reviews: '92 review',
  },
  {
    image: k_5,
    title: 'Gold Keychain with Flower Initial',
    originalPrice: '₹200.00',
    discountedPrice: '₹200.00',
    reviews: '17 review',
  },
  {
    discount: '37%',
    image: k_6,
    title: 'Yellow Flower Keychain with Name',
    originalPrice: '₹299.00',
    discountedPrice: '₹188.00',
    reviews: '84 review',
  },
  {
    discount: '12%',
    image: k_7,
    title: 'Pink and Gold Flower Keychain',
    originalPrice: '₹249.00',
    discountedPrice: '₹219.00',
    reviews: '47 review',
  },
  {
    discount: '3%',
    image: k_main,
    title: 'Blue Turtle Keychain',
    originalPrice: '₹199.00',
    discountedPrice: '₹193.00',
    reviews: '37 review',
  },
  {
    discount: '5%',
    image: k_9,
    title: 'Lucky Green Keychain',
    originalPrice: '₹149.00',
    discountedPrice: '₹141.00',
    reviews: '83 review',
  },
  {
    discount: '7%',
    image: k_10,
    title: 'Pink Flower Keychain',
    originalPrice: '₹199.00',
    discountedPrice: '₹185.00',
    reviews: '32 review',
  },
  {
    image: k_11,
    title: 'Steampunk Keychain',
    originalPrice: '₹120.00',
    discountedPrice: '₹120.00',
    reviews: '26 review',
  },
  {
    discount: '5%',
    image: k_12,
    title: 'Marble Keychains',
    originalPrice: '₹249.00',
    discountedPrice: '₹236.00',
    reviews: '34 review',
  },
  {
    discount: '8%',
    image: k_13,
    title: 'Ocean Sphere Keychain',
    originalPrice: '₹130.00',
    discountedPrice: '₹119.00',
    reviews: '85 review',
  },
  {
    discount: '10%',
    image: k_14,
    title: 'Lighthouse Keychain',
    originalPrice: '₹250.00',
    discountedPrice: '₹225.00',
    reviews: '95 review',
  },
  {
    discount: '12%',
    image: k_15,
    title: 'Lighthouse Keychain',
    originalPrice: '₹179.00',
    discountedPrice: '₹157.00',
    reviews: '48 review',
  },

];


function Keychains() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Kaushan Script", cursive' }}>
              "Keychains are the keepsakes of life's little moments."
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: '"Merriweather", serif' }}>
              "Small keys can open big doors."
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

export default Keychains;
