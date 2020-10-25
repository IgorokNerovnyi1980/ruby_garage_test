import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 3rem;
`
const FirstTitle = styled.h2`
  font-size: ${(p) => p.theme.h1};
  font-weight: 900;
  text-transform: uppercase;
  color: ${(p) => p.theme.opposite};
  text-align: center;
  margin-bottom: 0.5rem;
`
const SubTitle = styled(FirstTitle)`
  font-size: ${(p) => p.theme.h2};
  font-weight: 400;
`
const Title = ({ title = 'h1', subTitle = 'subTitle' }) => (
  <Wrapper>
    <FirstTitle>{title}</FirstTitle>
    <SubTitle>{subTitle}</SubTitle>
  </Wrapper>
)
export default Title
