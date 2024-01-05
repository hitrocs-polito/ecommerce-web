import styled from "styled-components"
import Center from "./Center";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import CartContext from "./CartContext"
import LikedContext from "./LikedContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';


const StyledHeader = styled.header`
  background-color: #EAEAEA;
  padding: 1rem;

  @media (max-width: 768px) {
    /* position: fixed;
    bottom: 0;
    left: 0; */
    z-index: 100;
    padding: .5rem 0.5rem;
    /* display: flex; */
    flex-direction: row;
    justify-content: start;
  }
`;

const Logo = styled.a`
  color: #101010;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const StyledNav = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const NavLink = styled.a`
  color: #101010;
  text-decoration: none;
  position: relative;
`

const CartCounter = styled.span`
  position: absolute;
  top: -8px; 
  right: -10px; 
  background-color: #FFA542;
  color: white; 
  border-radius: 50%; 
  padding: 3px; 
  font-size: 12px; 
  min-width: 15px; 
  text-align: center; 
  font-weight: 500;
`

function Header() {
  // eslint-disable-next-line no-undef
  const {cartProducts} = useContext(CartContext) 
  const {likedProducts} = useContext(LikedContext)

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>X-MAX MOBILE</Logo>
          <StyledNav>
            <NavLink href="/"><FontAwesomeIcon icon={farHeart} color="#aaa" size="2x" />{<CartCounter>{likedProducts.length}</CartCounter>}</NavLink>
            <NavLink href="/"><FaShoppingCart size={30}/><CartCounter>{cartProducts.length}</CartCounter></NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Header
