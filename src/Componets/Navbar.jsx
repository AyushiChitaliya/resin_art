import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import logo from '../Componets/image/r_logo-transformed.png';
import phoneCase from '../Componets/image/PhoneCases.webp';
import jewelary from '../Componets/image/Jewelry_Cards.jpg';
import artPannal from '../Componets/image/ArtPannal_Card.jpg';
import keyChain from '../Componets/image/KeyChain_Card.jpeg';
import candleHolders from '../Componets/image/CandleHolders_Card.jpg';
import clock from '../Componets/image/Clock_Card.jpg';
import photoFrem from '../Componets/image/PhotoFrem_Card.jpg';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    right: '60%',
    [theme.breakpoints.up('md')]: {
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '20%'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '35ch',
        },
    },
}));

const ProductBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
}));

const ProductImage = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
    width: '80px',
    height: '80px',
    marginBottom: theme.spacing(1),
    border: 'none',
}));

const ProductTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Kaushan Script", cursive',
}));


const LogoTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Kaushan Script", cursive',
    fontSize: '24px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    fontFamily: '"Kaushan Script", cursive',
    '&:hover': {
        color: theme.palette.secondary.main,
    },
}));

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [isNotificationsActive, setIsNotificationsActive] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleNotificationsClick = () => {
        setIsNotificationsActive(!isNotificationsActive);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Favorites</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
                    <Badge color="error">
                        {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <HelpIcon />
                    </Badge>
                </IconButton>
                <p>Help</p>
            </MenuItem>
        </Menu>
    );

    const products = [
        {
            name: 'Jewelry',
            image: jewelary,
            link: '/jewelry'
        },
        {
            name: 'Art Panels',
            image: artPannal,
            link: '/art-panels'
        },
        {
            name: 'Keychains',
            image: keyChain,
            link: '/keychains'
        },
        {
            name: 'Clocks',
            image: clock,
            link: '/clocks'
        },
        {
            name: 'Candle Holders',
            image: candleHolders,
            link: '/candle-holders'
        },
        {
            name: 'Photo Frames',
            image: photoFrem,
            link: '/photo-frames'
        },
        {
            name: 'Phone Cases',
            image: phoneCase,
            link: '/phone-cases'
        },
    ];

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <LogoTypography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src={logo} alt="Clotya" width={'15%'} />
                    </LogoTypography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for Products..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <IconButton size='large' color="inherit" className='FavoriteIcon' aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
                            <Badge color="error">
                                {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            sx={{ ml: 1 }}
                            color="inherit"
                        >
                            <HelpIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                {renderMobileMenu}
                {renderMenu}
            </AppBar>
            <Box
                sx={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'center', // Center the content horizontally
                    flexWrap: 'wrap',
                    padding: 2,
                    margin: '0 auto', // Center the Box itself
                }}
            >
                {products.map((product) => (
                    <ProductBox key={product.name} sx={{textAlign: 'center'}}> 
                        <Link to={product.link}>
                            <ProductImage src={product.image} alt={product.name} />
                            <ProductTypography>{product.name}</ProductTypography>
                        </Link>
                    </ProductBox>
                ))}
            </Box>
        </div>
    );
}

export default Navbar;
