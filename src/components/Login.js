import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      {/* call to action */}
      <CTA> 
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>Get All There</SignUp>
        <Description>Description</Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    opacity: 0.7;
  }
`

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
  margin-top: 100px;
  align-items: center;
`

const CTALogoOne = styled.img``

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5px;
`

const CTALogoTwo = styled.img`
  width: 90%;
`