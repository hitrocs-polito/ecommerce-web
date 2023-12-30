import styled from "styled-components"
import Center from "./Center";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import CartContext from "./CartContext"
import LikedContext from "./LikedContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';


const StyledHeader =  styled.header`
  background-color: #EAEAEA;  
`;

const Logo = styled.a`
  color: #101010;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 25px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  `

const StyledNav = styled.div`
  display: flex;
  gap: 30px;
`

const NavLink = styled.a`
  color: #101010;
  text-decoration: none;
  position: relative;
`

const CartCounter = styled.span`
  position: absolute;
  top: -8px; /* Adjust top position */
  right: -10px; /* Adjust right position */
  background-color: #FFA542;
  color: white; /* Text color for the count */
  border-radius: 50%; /* To create a circular shape */
  padding: 3px; /* Padding around the count */
  font-size: 12px; /* Font size of the count */
  min-width: 15px; /* Minimum width to ensure the count is visible */
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
