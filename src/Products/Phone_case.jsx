import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton , Button} from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import pc_1 from '../Componets/image/Phone_case/img-1.jpg';
import pc_main from '../Componets/image/Phone_case/pc_main.jpg'
import pc_2 from '../Componets/image/Phone_case/img-2.jpg';
import pc_3 from '../Componets/image/Phone_case/img-3.avif';
import pc_4 from '../Componets/image/Phone_case/img-4.jpg';
import pc_5 from '../Componets/image/Phone_case/img-5.jpg';
import pc_6 from '../Componets/image/Phone_case/img-6.jpg';
import pc_7 from '../Componets/image/Phone_case/img-7.jpg';
import pc_8 from '../Componets/image/Phone_case/img-8.jpeg';
import pc_9 from '../Componets/image/Phone_case/img-9.jpg';
import pc_10 from '../Componets/image/Phone_case/img-10.jpg';
import pc_11 from '../Componets/image/Phone_case/img-11.jpg';
import pc_12 from '../Componets/image/Phone_case/img-12.jpg';
import pc_13 from '../Componets/image/Phone_case/img-13.jpg';
import pc_14 from '../Componets/image/Phone_case/img-14.jpg';
import pc_15 from '../Componets/image/Phone_case/img-15.jpg';
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
  backgroundImage: `url(${pc_main})`, // Replace with your image URL
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
    image: pc_1,
    title: 'Floral Phone Case',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '27 review',
  },
  {
    discount: '5%',
    image: pc_main,
    title: 'Ocean Wave Phone Case',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '85 review',
  },
  {
    discount: '14%',
    image: pc_2,
    title: 'Customized Floral Phone Case',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '73 review',
  },
  {
    image: pc_3,
    title: 'Daisy Phone Case',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '75 review',
  },
  {
    discount: '10%',
    image: pc_4,
    title: 'Elegant Floral Phone Case',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '25 review',
  },
  {
    image: pc_5,
    title: 'Sparkle Heart Phone Case',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '63 review',
  },
  {
    discount: '37%',
    image: pc_6,
    title: 'Butterfly and Flowers Phone Case',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '46 review',
  },
  {
    image: pc_7,
    title: 'Cute Cartoon Phone Case',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '85 review',
  },
  {
    discount: '3%',
    image: pc_8,
    title: 'Glitter Bear Phone Case',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '25 review',
  },
  {
    discount: '5%',
    image: pc_9,
    title: 'Office Supply Phone Case',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '85 review',
  },
  {
    discount: '7%',
    image: pc_10,
    title: 'Pearl Flower Phone Case',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '95 review',
  },
  {
    image: pc_11,
    title: 'Photo Frame Floral Phone Case',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '37 review',
  },
  {
    image: pc_12,
    title: 'Pink Flower Phone Case',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '29 review',
  },
  {
    discount: '8%',
    image: pc_13,
    title: 'Gold Glitter Phone Case',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '84 review',
  },
  {
    discount: '10%',
    image: pc_14,
    title: 'Gold Marble Phone Case',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '24 review',
  },
  {
    image: pc_15,
    title: 'Golden Flakes Phone Case',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '85 review',
  },

];


function Phone_case() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
            "Express yourself with a unique resin art phone case."
            </Typography>
            <Typography variant="h6" sx={{fontFamily: '"Merriweather", serif'}}>
            "Your phone deserves art, not just protection."
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
                <CustomButton variant="contained" className='btn' sx={{left: '36%' , borderRadius: '20px'}}>Shop Now</CustomButton>
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

export default Phone_case;
