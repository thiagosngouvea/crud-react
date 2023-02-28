import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const LinksContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Link = styled.li`
    margin: 0 0.5rem;
`;
