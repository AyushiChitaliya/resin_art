import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton , Button} from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import p_1 from '../Componets/image/Photo_Frame/img-1.jpg';
import p_main from '../Componets/image/Photo_Frame/p_main.jpg'
import p_2 from '../Componets/image/Photo_Frame/img-2.jpg';
import p_3 from '../Componets/image/Photo_Frame/img-3.jpg';
import p_4 from '../Componets/image/Photo_Frame/img-4.jpg';
import p_5 from '../Componets/image/Photo_Frame/img-5.jpg';
import p_6 from '../Componets/image/Photo_Frame/img-6.jpg';
import p_7 from '../Componets/image/Photo_Frame/img-7.jpg';
import p_8 from '../Componets/image/Photo_Frame/img-8.jpg';
import p_9 from '../Componets/image/Photo_Frame/img-9.jpg';
import p_10 from '../Componets/image/Photo_Frame/img-10.jpg';
import p_11 from '../Componets/image/Photo_Frame/img-11.jpg';
import p_12 from '../Componets/image/Photo_Frame/img-12.jpg';
import p_13 from '../Componets/image/Photo_Frame/img-13.webp';
import p_14 from '../Componets/image/Photo_Frame/img-14.jpg';
import p_15 from '../Componets/image/Photo_Frame/img-15.jpg';
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
  backgroundImage: `url(${p_main})`, // Replace with your image URL
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
    image: p_1,
    title: 'Illuminated Memory Frame',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '95 review',
  },
  {
    discount: '5%',
    image: p_main,
    title: 'Pearl Elegance Keepsake',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '26 review',
  },
  {
    discount: '14%',
    image: p_2,
    title: 'Birthday Wishes Light Frame',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '13 review',
  },
  {
    image: p_3,
    title: 'Golden Edge Keepsake Plate',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '84 review',
  },
  {
    discount: '10%',
    image: p_4,
    title: 'Wedding Day Memory Frame',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '17 review',
  },
  {
    image: p_5,
    title: 'Friends Forever Memory Frame',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '55 review',
  },
  {
    discount: '37%',
    image: p_6,
    title: 'Soulmate Memory Frame',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '36 review',
  },
  {
    image: p_7,
    title: 'Wedding Date Keepsake Plate',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '27 review',
  },
  {
    discount: '3%',
    image: p_8,
    title: 'Illuminated Love Story Frame',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '28 review',
  },
  {
    discount: '5%',
    image: p_9,
    title: 'Golden Globe Light Frame',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '26 review',
  },
  {
    discount: '7%',
    image: p_10,
    title: 'Floral Romance Memory Frame',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '89 review',
  },
  {
    image: p_11,
    title: 'Heartfelt Wishes Keepsake',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '85 review',
  },
  {
    image: p_12,
    title: 'Best Friends Forever Frame',
    originalPrice: '$129.00',
    discountedPrice: '$112.00',
    reviews: '45 review',
  },
  {
    discount: '8%',
    image: p_13,
    title: 'Golden Moments Memory Frame',
    originalPrice: '$29.99',
    discountedPrice: '$23.99',
    reviews: '79 review',
  },
  {
    discount: '10%',
    image: p_14,
    title: 'Everlasting Friendship Frame',
    originalPrice: '$18.99',
    discountedPrice: '$11.99',
    reviews: '27 review',
  },
  {
    image: p_15,
    title: 'Family Is Everything Frame',
    originalPrice: '$37.50',
    discountedPrice: '$29.50',
    reviews: '14 review',
  },

];


function Photo_Frame() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
            "Life is a collection of moments, make them last forever."
            </Typography>
            <Typography variant="h6" sx={{fontFamily: '"Merriweather", serif'}}>
            "Memories are timeless treasures of the heart."
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

export default Photo_Frame;
