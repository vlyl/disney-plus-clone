import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommanded for You</h4>
      <Content>
        <Wrap>
          <img alt='' src='https://pic3.zhimg.com/80/6a41faeb691559f5a3c2d91ea53a4c71_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic4.zhimg.com/80/2922882ac1262ab57cdd924e44c04c7f_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic2.zhimg.com/80/05444e720fbed0657cb2a6f897a9b8ad_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic2.zhimg.com/80/6f5fb0f4da43d512f44676704eb41fb7_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic3.zhimg.com/80/6a41faeb691559f5a3c2d91ea53a4c71_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic4.zhimg.com/80/2922882ac1262ab57cdd924e44c04c7f_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic2.zhimg.com/80/05444e720fbed0657cb2a6f897a9b8ad_1440w.jpg' />
        </Wrap>
        <Wrap>
          <img alt='' src='https://pic2.zhimg.com/80/6f5fb0f4da43d512f44676704eb41fb7_1440w.jpg' />
        </Wrap>

      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`