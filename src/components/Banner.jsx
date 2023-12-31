import styled from "styled-components"
import Center from "./Center"

const Bg = styled.div`
  width: 80%;
  height: 12.3125rem;
  background-color: #101010;
  color: #fff;
  padding: 10px 0;
  margin: 22px auto 0;
  border-radius: 30px;
`

const Title =  styled.h1`
  margin: 30px 50px;
  font-weight: normal;

  @media (max-width: 870px) {
    margin: 30px 0 0 30px;
    font-size: 1.2rem;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1rem;
  justify-content: center;
  height: 187px;
  overflow: hidden;
  img {
    width: 300px;
  }

  @media (max-width: 870px) {
    overflow: visible;
    img {
      gap: 10px;
      margin-right: 1rem;
      width: 180px;
    }
  }
`

function Banner() {
  return (
    <Bg>
        <Center>
          <Wrapper>
            <Title>Аксессуары для Iphone 13 Pro Max</Title>
            <img src="https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/14/cc/14cc4d741fd62e843163113fd28ea7a3/231108150102044304.webp" 
            alt="phone_image"/>
          </Wrapper>
               
        </Center>
    </Bg>
  )
}

export default Banner
