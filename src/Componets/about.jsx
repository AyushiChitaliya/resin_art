import React from 'react';
import { Box, Grid, Typography} from '@mui/material';
import { styled } from '@mui/system';

const AboutUsContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: 'white',
    fontFamily: '"Merriweather", sans-serif',
});

const TextContainer = styled(Box)({
    width: '60%',
});

const ImageContainer = styled(Box)({
    width: '35%',
    height: 'auto',
    overflow: 'hidden',
    position: 'relative',
});

const StoreInfoContainer = styled(Box)({
    padding: '20px 0',
    borderTop: '1px solid #eee',
});

const AboutUs = () => {
    return (
        <Box>
            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily: '"Kaushan Script", cursive' }}>
                About Us
            </Typography>
            <AboutUsContainer>
                {/* <TextContainer> */}
                    {/* <Typography variant="overline" component="div" gutterBottom sx={{ color: 'red' }}>
                    About Resin Treasures
                </Typography> */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="div" gutterBottom sx={{ color: 'blue', fontFamily: '"Kaushan Script", cursive' }}>
                            Our Story
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'gray', maxWidth: '600px', margin: '0 auto', paddingBottom: '30px', fontFamily: '"Merriweather", serif' }}>
                            Founded in 2024, Resin Treasures began as a small workshop with a big dream: to share the enchanting world of resin art with others. Over the years, we've grown into a thriving studio, dedicated to creating high-quality, unique resin art pieces that captivate and inspire.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: 'blue', fontFamily: '"Kaushan Script", cursive'}}>
                            Our Craft
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'gray', maxWidth: '600px', margin: '0 auto', paddingBottom: '30px', fontFamily: '"Merriweather", serif' }}>
                            Every piece we create is handcrafted with care and precision. From mesmerizing galaxy clocks to elegant resin jewelry, our collection showcases the endless possibilities of resin. We take pride in using only the finest materials to ensure each piece is not only beautiful but also durable and long-lasting.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: 'blue' ,fontFamily: '"Kaushan Script", cursive'}}>
                            Our Mission
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'gray', maxWidth: '600px', margin: '0 auto', paddingBottom: '30px', fontFamily: '"Merriweather", serif' }}>
                            At Resin Treasures, our mission is to bring art and beauty into everyday life. We believe that art should be accessible to everyone, and we're committed to creating pieces that are both stunning and affordable. Whether you're looking for a statement piece for your home or a unique gift for a loved one, we have something special for you.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: 'blue', fontFamily: '"Kaushan Script", cursive'}}>
                            Our Promise
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'gray', maxWidth: '600px', margin: '0 auto', paddingBottom: '30px', fontFamily: '"Merriweather", serif' }}>
                            We are dedicated to providing excellent customer service and ensuring that every customer is thrilled with their purchase. From the moment you browse our collection to the day your piece arrives at your door, we strive to make your experience seamless and enjoyable.
                            </Typography>
                        </Grid>
                    </Grid>
                {/* </TextContainer> */}
            </AboutUsContainer>
        </Box>
    );
};

export default AboutUs;
