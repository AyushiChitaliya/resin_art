import React from 'react';
import Navbar from './Navbar';
// import Slider from 'react-slick';
import { Box, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import best_seller_1 from '../Componets/image/best_seller_1.jpg';
import best_seller_2 from '../Componets/image/best_seller_2.jpg';
import best_seller_3 from '../Componets/image/best_seller_3.jpg';
import AboutUs from './about';
import Footer from './Footer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const SlideContainer = styled(Box)({
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: '"Kaushan Script", cursive',
    overflow: 'hidden',
});

const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const Content = styled(Box)({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    top: '32%',
});

const CustomButton = styled(Button)({
    marginTop: '20px',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

const FacilityContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px 0',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Added shadow here

});

const FeatureBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    maxWidth: '150px',
    padding: '20px', // Added padding for better appearance
    borderRadius: '10px', // Added border-radius for rounded corners
    backgroundColor: 'white', // Ensure background color is white for contrast
});

const FeatureIcon = styled(Box)({
    marginBottom: '10px',
    '& svg': {
        fontSize: '40px',
    },
});

const sliderData = [
    {
        title: '"RESIN ART WITH A TOUCH OF INDIVIDUALITY."',
        subtitle: "Discover, Shop, and Adorn Your Space with Unique Resin Creations",
        description: 'Discover the Beauty of Resin Art.',
        image: "src/Componets/image/slider-1.webp"
    },
    {
        title: '"EVERY PIECE, A HANDMADE MASTERPIECE."',
        subtitle: 'Find Your Perfect Handmade Resin Art Piece',
        description: 'Capture the Cosmos.',
        image: "src/Componets/image/slider-2.jpg",
    },
    {
        title: '"HANDCRAFTED RESIN WONDERS, ONE OF A KIND."',
        subtitle: "Shop Unique Resin Art Pieces, Crafted by Hand",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "src/Componets/image/slider-3.jpeg",
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

// const CustomSlider = () => (
//     <Slider {...settings}>
//         {sliderData.map((slide, index) => (
//             <SlideContainer className='demo' key={index} sx={{ backgroundImage: `url(${slide.image})` }}>
//                 <Overlay />
//                 <Content>
//                     <Typography variant="h6" component="div" gutterBottom>
//                         {slide.subtitle}
//                     </Typography>
//                     <Typography variant="h2" component="div" gutterBottom sx={{ fontFamily: '"Kaushan Script", cursive' }}>
//                         {slide.title}
//                     </Typography>
//                     <Typography variant="body1" component="div" gutterBottom>
//                         {slide.description}
//                     </Typography>
//                     <CustomButton variant="contained" className='btn'>Shop Collection</CustomButton>
//                 </Content>
//             </SlideContainer>
//         ))}
//     </Slider>
// );

const BestSellerProducts = () => {
    const products = [
        {
            discount: '26%',
            image: best_seller_1,
            title: 'Sleeveless Ribbed Short Dress',
            originalPrice: '$19.99',
            discountedPrice: '$14.99',
            reviews: '1 review',
            available: '89',
            sold: '60',
        },
        {
            discount: null,
            image: best_seller_3,
            title: 'Valentin Paul Essential Collection',
            originalPrice: null,
            discountedPrice: null,
            reviews: null,
            available: null,
            sold: null,
        },
        {
            discount: '17%',
            image: best_seller_2,
            title: 'Basic Relax Fit Leggings',
            originalPrice: '$29.90',
            discountedPrice: '$24.90',
            reviews: '1 review',
            available: '129',
            sold: '125',
        },
    ];

    return (
        <Box textAlign="center" margin="50px 0">
            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', fontFamily: '"Kaushan Script", cursive', paddingBottom: '25px', }}>
                Best Seller Products
            </Typography>
            <Typography variant="body1" component="div" gutterBottom sx={{ color: 'gray', maxWidth: '600px', margin: '0 auto', paddingBottom: '30px', fontFamily: '"Merriweather", serif' }}>
                A stunning clock featuring a swirling galaxy design in vibrant colors, with a silent quartz movement for a modern touch. A captivating ring with a cosmic design, featuring sparkling star-like specks and vibrant nebula colors in a durable, adjustable band. An elegant pendant showcasing a mesmerizing cosmic scene, suspended from a delicate chain, adding celestial charm to any outfit.
            </Typography>
            <Box display="flex" justifyContent="center" gap="20px" marginTop="20px">
                {products.map((product, index) => (
                    <Card key={index} sx={{ width: '300px', position: 'relative', borderRadius: '20px'  }}>
                        {product.discount && (
                            <Box
                                position="absolute"
                                top="10px"
                                left="10px"
                                bgcolor="green"
                                color="white"
                                padding="5px 10px"
                                borderRadius="5px"
                                fontWeight="bold"
                            >
                                {product.discount}
                            </Box>
                        )}
                        <CardMedia component="img" height="400" image={product.image} alt={product.title} sx={{ borderRadius: '20px 20px 0 0' }}/>
                        <CardContent sx={{ borderRadius: '0 0 20px 20px' }}>
                            <Typography variant="body1" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {product.title}
                            </Typography>
                            {product.originalPrice && (
                                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="10px">
                                    <Typography variant="body2" component="div" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                                        {product.originalPrice}
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: 'red' }}>
                                        {product.discountedPrice}
                                    </Typography>
                                </Box>
                            )}
                            {product.reviews && (
                                <Box display="flex" alignItems="center" marginTop="10px" color="orange">
                                    <Typography variant="body2" component="div">
                                        ⭐ {product.reviews}
                                    </Typography>
                                </Box>
                            )}
                            {product.available && (
                                <Box display="flex" justifyContent="space-between" marginTop="10px">
                                    <Typography variant="body2" component="div" sx={{ color: 'gray' }}>
                                        Available: {product.available}
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ color: 'red' }}>
                                        Sold: {product.sold}
                                    </Typography>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

const features = [
    {
        icon: <LocalShippingIcon />,
        title: 'Free Shipping',
        description: 'Free Shipping for orders over £20.',
    },
    {
        icon: <VerifiedIcon />,
        title: 'Money Guarantee',
        description: 'Within 30 days for an exchange.',
    },
    {
        icon: <SupportAgentIcon />,
        title: 'Online Support',
        description: '24/7 support available.',
    },
    {
        icon: <CreditCardIcon />,
        title: 'Flexible Payment',
        description: 'Pay with Multiple Credit Cards.',
    },
];

function Mainbody() {
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* <Navbar /> */}
            {/* <CustomSlider /> */}
            <BestSellerProducts />
            <AboutUs />
            <FacilityContainer sx={{ backgroundColor: 'white' }}>
                {features.map((feature, index) => (
                    <FeatureBox key={index}>
                        <FeatureIcon>{feature.icon}</FeatureIcon>
                        <Typography variant="h6" sx={{ fontFamily: '"Kaushan Script", cursive' }}>{feature.title}</Typography>
                        <Typography variant="body2" sx={{ fontFamily: '"Merriweather", serif' }}>{feature.description}</Typography>
                    </FeatureBox>
                ))}
            </FacilityContainer>
            <Box className='white_space'></Box>
            {/* <Footer /> */}
        </div>
    );
}

export default Mainbody;
