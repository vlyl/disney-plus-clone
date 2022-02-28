import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg'></Logo>
      <NaveMenu></NaveMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;    // flex layout
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 80px;
`

const NaveMenu = styled.div`

`