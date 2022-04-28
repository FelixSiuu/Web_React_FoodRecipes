import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  width: 100%;
  height: 10rem;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right,#02b35a,#00843c);
  color: white;
  font-weight: bold;
`

export default function Footer() {
  return (
    <FooterStyle>
      Resources from @spoonacular API
    </FooterStyle>
  )
}
