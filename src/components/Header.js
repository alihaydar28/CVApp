import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
      <HeaderWrapper>
        <h1>CV CREATOR</h1>
      </HeaderWrapper>
    );
}


const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  font-family: 'Zen Tokyo Zoo', cursive;
  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 3rem 8rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.2rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`

export default Header;