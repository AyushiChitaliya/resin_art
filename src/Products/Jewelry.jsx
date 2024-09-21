import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton , Button} from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import j_1 from '../Componets/image/Jewelry/img-1.jpg';
import j_main from '../Componets/image/Jewelry/j_main.jpg'
import j_2 from '../Componets/image/Jewelry/img-2.jpg';
import j_3 from '../Componets/image/Jewelry/img-3.webp';
import j_4 from '../Componets/image/Jewelry/img-4.jpg';
import j_5 from '../Componets/image/Jewelry/img-5.jpg';
import j_6 from '../Componets/image/Jewelry/img-6.webp';
import j_7 from '../Componets/image/Jewelry/img-7.jpg';
import j_8 from '../Componets/image/Jewelry/img-8.jpg';
import j_9 from '../Componets/image/Jewelry/img-9.jpg';
import j_10 from '../Componets/image/Jewelry/img-10.jpg';
import j_11 from '../Componets/image/Jewelry/img-11.jpg';
import j_12 from '../Componets/image/Jewelry/img-12.jpg';
import j_13 from '../Componets/image/Jewelry/img-13.jpg';
import j_14 from '../Componets/image/Jewelry/img-14.jpg';
import j_15 from '../Componets/image/Jewelry/img-15.jpg';
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
  backgroundImage: `url(${j_main})`, // Replace with your image URL
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
    image: j_1,
    name: 'Heart Shap Nackless',
    originalPrice: '₹500.00',
    discountedPrice: '₹450.00',
    reviews: '10 review',
  },
  {
    discount: '5%',
    image: j_main,
    name: 'Dandelion Wish Necklace',
    originalPrice: '₹472.00',
    discountedPrice: '₹450.00',
    reviews: '20 review',
  },
  {
    discount: '14%',
    image: j_2,
    name: 'Autumn Leaves Round Pendant',
    originalPrice: '₹299.00',
    discountedPrice: '₹257.00',
    reviews: '15 review',
  },
  {
    image: j_3,
    name: 'Purple Blossom Round Pendant',
    originalPrice: '₹450.00',
    discountedPrice: '₹450.00',
    reviews: '10 review',
  },
  {
    discount: '10%',
    image: j_4,
    name: 'Dandelion Drop Earrings',
    originalPrice: '₹199.00',
    discountedPrice: '₹179.00',
    reviews: '5 review',
  },
  {
    image: j_5,
    name: 'Green Leaf Sphere Earrings',
    originalPrice: '₹349.00',
    discountedPrice: '₹349.00',
    reviews: '27 review',
  },
  {
    discount: '37%',
    image: j_6,
    name: 'White Flower Round Earrings',
    originalPrice: '₹450.00',
    discountedPrice: '₹283.00',
    reviews: '13 review',
  },
  {
    image: j_7,
    name: 'Blue Blossom Oval Pendant',
    originalPrice: '₹500.00',
    discountedPrice: '₹500.00',
    reviews: '37 review',
  },
  {
    discount: '3%',
    image: j_8,
    name: 'Blossom in Resin Ring',
    originalPrice: '₹350.00',
    discountedPrice: '₹339.00',
    reviews: '33 review',
  },
  {
    discount: '5%',
    image: j_9,
    name: 'Mountain Peak Resin Ring',
    originalPrice: '₹250.00',
    discountedPrice: '₹237.00',
    reviews: '13 review',
  },
  {
    discount: '7%',
    image: j_10,
    name: 'Skyline Wood Resin Ring',
    originalPrice: '₹399.00',
    discountedPrice: '₹371.00',
    reviews: '74 review',
  },
  {
    image: j_11,
    name: 'Ocean Wave Resin Ring',
    originalPrice: '₹599.00',
    discountedPrice: '₹599.00',
    reviews: '75 review',
  },
  {
    image: j_12,
    name: 'Galaxy Resin Bangle Set',
    originalPrice: '₹450.00',
    discountedPrice: '₹450.00',
    reviews: '25 review',
  },
  {
    discount: '8%',
    image: j_13,
    name: 'Floral Garden Resin Ring',
    originalPrice: '₹349.00',
    discountedPrice: '₹321.00',
    reviews: '99 review',
  },
  {
    discount: '10%',
    image: j_14,
    name: 'Fiery Sunset Resin Ring',
    originalPrice: '₹399.00',
    discountedPrice: '₹359.00',
    reviews: '65 review',
  },
  {
    image: j_15,
    name: 'Aurora Borealis Resin Necklace',
    originalPrice: '₹299.00',
    discountedPrice: '₹299.00',
    reviews: '59 review',
  },

];


function Jewelry() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
            "Jewelry has the power to be this one little thing that can make you feel unique."
            </Typography>
            <Typography variant="h6" sx={{fontFamily: '"Merriweather", serif'}}>
            "Jewelry is a way of keeping memories alive."
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
                <CardMedia component="img" sx={{height: '400px' , width: '100%'}} image={product.image} title={product.name} />
                <CardContent>
                  <Typography variant="body1" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
                    {product.name}
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

export default Jewelry;
