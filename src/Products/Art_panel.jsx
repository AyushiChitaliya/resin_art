import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton , Button} from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from '../Componets/Navbar';
import a_1 from '../Componets/image/Art_panel/img-1.png';
import a_main from '../Componets/image/Art_panel/a_main.jpg'
import a_2 from '../Componets/image/Art_panel/img-2.jpg';
import a_3 from '../Componets/image/Art_panel/img-3.jpg';
import a_4 from '../Componets/image/Art_panel/img-4.jpg';
import a_5 from '../Componets/image/Art_panel/img-5.jpg';
import a_6 from '../Componets/image/Art_panel/img-6.jpg';
import a_7 from '../Componets/image/Art_panel/img-7.jpg';
import a_8 from '../Componets/image/Art_panel/img-8.jpg';
import a_9 from '../Componets/image/Art_panel/img-9.jpg';
import a_10 from '../Componets/image/Art_panel/img-10.jpeg';
import a_11 from '../Componets/image/Art_panel/img-11.jpg';
import a_12 from '../Componets/image/Art_panel/img-12.jpg';
import a_13 from '../Componets/image/Art_panel/img-13.jpg';
import a_14 from '../Componets/image/Art_panel/img-14.jpg';
import a_15 from '../Componets/image/Art_panel/img-15.jpg';
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
  backgroundImage: `url(${a_main})`, // Replace with your image URL
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
    discount: '11%',
    image: a_1,
    title: 'Pink Marble Resin Art Panel',
    originalPrice: '₹3,999.00',
    discountedPrice: '₹3,559.00',
    reviews: '16 review',
  },
  {
    discount: '14%',
    image: a_main,
    title: 'Fiery Burst Resin Art Panel',
    originalPrice: '₹3,999.00',
    discountedPrice: '₹3,439.00',
    reviews: '85 review',
  },
  {
    image: a_2,
    title: 'Ocean Blue Resin Art Panel',
    originalPrice: '₹4,999.00',
    discountedPrice: '₹4,499.00',
    reviews: '75 review',
  },
  {
    image: a_3,
    title: 'Emerald Wave Resin Art Panel',
    originalPrice: '₹4,555.00',
    discountedPrice: '₹4555.00',
    reviews: '86 review',
  },
  {
    discount: '21%',
    image: a_4,
    title: 'Aqua Gem Resin Art Panel',
    originalPrice: '₹5,555.00',
    discountedPrice: '₹4,388.00',
    reviews: '64 review',
  },
  {
    image: a_5,
    title: 'Deep Sea Resin Art Panel',
    originalPrice: '₹3,999.00',
    discountedPrice: '₹3,999.00',
    reviews: '63 review',
  },
  {
    discount: '10%',
    image: a_6,
    title: 'Earth and Sky Resin Art Panel',
    originalPrice: '₹3,646.00',
    discountedPrice: '₹3,281.00',
    reviews: '24 review',
  },
  {
    discount: '5%',
    image: a_7,
    title: 'Galactic Gold Resin Art Panel',
    originalPrice: '₹3,999.00',
    discountedPrice: '₹3,799.00',
    reviews: '98 review',
  },
  {
    image: a_8,
    title: 'Golden Earthscape Resin Panel',
    originalPrice: '₹4,000.00',
    discountedPrice: '₹4,000.00',
    reviews: '33 review',
  },
  {
    discount: '5%',
    image: a_9,
    title: 'Ocean Breeze Resin Artwork',
    originalPrice: '₹2,555.00',
    discountedPrice: '₹1,990.00',
    reviews: '64 review',
  },
  {
    discount: '7%',
    image: a_10,
    title: 'SPurple Haze Resin Canvas',
    originalPrice: '₹1,999.00',
    discountedPrice: '₹1,859.00',
    reviews: '69 review',
  },
  {
    image: a_11,
    title: 'Golden Veins Resin Disc',
    originalPrice: '₹1,555.00',
    discountedPrice: '₹1,555.00',
    reviews: '24 review',
  },
  {
    discount: '10%',
    image: a_12,
    title: 'Monochrome Marble Resin Panel',
    originalPrice: '₹3,550.00',
    discountedPrice: '₹3,195.00',
    reviews: '85 review',
  },
  {
    image: a_13,
    title: 'Deep Blue Geode Resin Panel',
    originalPrice: '₹2,340.00',
    discountedPrice: '₹2,340.00',
    reviews: '75 review',
  },
  {
    image: a_14,
    title: 'Deep Blue Geode Resin Panel',
    originalPrice: '₹4,590.00',
    discountedPrice: '₹4,590.00',
    reviews: '63 review',
  },
  {
    discount: '8%',
    image: a_15,
    title: 'Mystic Night Sky Resin Panel',
    originalPrice: '₹3,999.00',
    discountedPrice: '₹3,679.00',
    reviews: '26 review',
  },

];


function Art_panel() {
  return (
    <div>
      {/* <Navbar /> */}
      <Box>
        <BannerContainer>
          <Overlay />
          <BannerText>
            <Typography variant="h3" gutterBottom sx={{fontFamily: '"Kaushan Script", cursive'}}>
            "Art is not what you see, but what you make others see."
            </Typography>
            <Typography variant="h6" sx={{fontFamily: '"Merriweather", serif'}}>
            "Every artist was first an amateur."
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

export default Art_panel;
