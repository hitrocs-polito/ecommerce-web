/* eslint-disable react/prop-types */
import styled from "styled-components"
import { useContext, useState } from "react";
import CartContext from "./CartContext"
import LikedContext from "./LikedContext";
import CartWithQuantity from "./CartWithQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const StyledHeart = styled(FontAwesomeIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ccc;
  cursor: pointer;

  &:hover,
  &.active {
    color: red; 
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    img {
      max-width: 100%; 
      height: auto; 
    }

    Title {
      font-size: 22px;
    }
  }
`;

const Image = styled.img`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 20px; 
  height: 300px;
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 15px;
  

  img{
    max-width: 250px;
    max-height: 350px;
  }
`

const Title = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
`

const DescStyle = styled.div`
  margin-top: 10px;
  padding: 10px;
`

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
`


function ProductCard({ id, title, price, imgUrl }) {
  const { addProduct, removeProduct } = useContext(CartContext);
  const { addLikedProduct, removeLikedProduct } = useContext(LikedContext);

  const [isHeartActive, setIsHeartActive] = useState(false); // State for heart active state

  const handleHeartClick = () => {
    const newIsHeartActive = !isHeartActive;
    setIsHeartActive(newIsHeartActive);

    if (newIsHeartActive) {
      addLikedProduct(id);
    } else {
      removeLikedProduct(id);
    }
  };

  const handleCartClick = (action) => {
    if (action === 'increment') {
      addProduct(id);
    } else if (action === 'decrement') {
      removeProduct(id);
      // Implement the logic to remove the product from local storage or perform the necessary action
    }
  };

  return (
    <Card>
      <WhiteBox>
      <StyledHeart
      size="lg"
      icon={faHeart} // Use the heart icon from Font Awesome
      className={isHeartActive ? "active" : ""}
      onClick={handleHeartClick}
    />
        <div>
          <Image src={imgUrl} alt="product-image"></Image>
        </div>
      </WhiteBox>
      <DescStyle>
        <Title>{title}</Title>
        <PriceRow>
          <Price>
            {Math.round(price).toLocaleString('en-US').replace(/,/g, ' ')} сум
          </Price>
          <CartWithQuantity onClick={handleCartClick} />
        </PriceRow>
      </DescStyle>
    </Card>
  );
}

export default ProductCard
