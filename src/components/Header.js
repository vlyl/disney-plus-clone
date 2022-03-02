import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg'></Logo>
      <NaveMenu>
        <a>
          <img src='/images/home-icon.svg' />
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' />
          <span>SERIES</span>
        </a>
      </NaveMenu>
      <UserImage src='https://img2.doubanio.com/icon/ul103313744-13.jpg' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;    // flex layout
  align-items: center;
  padding: 0 36px;  // 上边下边 | 左边右边 
`

const Logo = styled.img`
  width: 80px;
`

const NaveMenu = styled.div`
  display: flex;
  flex: 1;  // todo ??
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 1px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }  
`

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`