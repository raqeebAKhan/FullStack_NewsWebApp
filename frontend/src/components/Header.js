import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
background: #fff;
height: 70px;

`;

const MenuIcon = styled(Menu)`
color: black;

`;

const Image = styled('img')({
    height: 55,
    margin: 'auto',
})

function Header() {
    const url = 'https://cdn.jim-nielsen.com/ios/512/news-break-local-breaking-2018-09-12.png';
  return (
      <StyledHeader position='static'>
        <Toolbar>
            <MenuIcon/>
            <Image src={url} alt="logo"/>
        </Toolbar>
      </StyledHeader>
      

  )
}

export default Header
