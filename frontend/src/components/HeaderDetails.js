import { Box, styled, Typography } from '@mui/material';
import React from 'react'

const Container = styled(Box)(({ theme }) => ({
  background: '#f44336',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  height: 48,
  marginBottom: 30,
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}));

const Image = styled('img')({
  height: 34,
  '&:last-child': {
      margin: '0 50px 0 20px'
  }
});

const Text = styled(Typography)`
      font-size: 14px;
      font-weight: 300;
      margin-left: 50px;
      font-family: 'Roboto',sans-serif;
  `;

function HeaderDetails() {
    const appstore ='https://assets.inshorts.com/website_assets/images/appstore.png'
    const googleplaystore ='https://assets.inshorts.com/website_assets/images/playstore.png'
  return (
    <Container className='container'>
      <Text>For best experience use The News App on your smartphone</Text>
      <Box style={{ marginLeft: 'auto', display: 'flex' }}>
        <Image  src={appstore} alt="appstore"/>
        <Image  src={googleplaystore} alt="playstore"/>
      </Box>
    </Container>
  )
}

export default HeaderDetails
