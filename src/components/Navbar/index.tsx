import React from 'react';
import { NavbarContainer, Title, LinksContainer, Link as LinkStyled } from './styles';
import { Link } from 'react-router-dom';
interface NavbarProps {
  title: string;
}

class Navbar extends React.Component<NavbarProps> {
  constructor(props: NavbarProps) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <NavbarContainer>
        <Title>{title}</Title>
        <LinksContainer>
        <LinkStyled>
          <Link to="/home">Home</Link>
        </LinkStyled>
        <LinkStyled>
          <Link to="/dashboard">Dashboard</Link>
        </LinkStyled>
        </LinksContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
