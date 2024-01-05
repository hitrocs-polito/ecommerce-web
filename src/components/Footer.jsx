import styled from "styled-components"
import Center from "./Center"
import { FaTelegram, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';

const FooterStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  margin: 40px 0 0 0;
  padding: 33.42px 29px;
  border-radius: 30px 30px 0 0;
  font-weight: 500;

  @media screen and (max-width: 830px){
    grid-template-columns: 1fr 1fr;
  }
`

const FooterTitle = styled.h2`
  margin: 0;
  cursor: pointer;
  @media screen and (max-width: 830px){
    display: none;
  }
`

const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  justify-content: space-evenly;
  
`

const LinkStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  justify-content: space-evenly;

  @media screen and (max-width: 830px){
    display: none;
  }
`

const ListStyle = styled.li`
  display: flex;
  list-style: none;
  font-size: 17px;
  margin: 0;
  cursor: pointer;
`

const LangStyle = styled.li`
  display: flex;
  gap: 10px;

  
`

const SocialStyle = styled.ul`
  display: flex;
  gap: 17.6px;
  justify-content: center;
  align-items: start;
  margin: 0;

  @media screen and (max-width: 700px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
  }
`

function Footer() {
  return (
    <Center>
      <FooterStyle>
        <FooterTitle>X-MAX MOBILE</FooterTitle>
        <LinkStyle>
          <ListStyle>Избранное</ListStyle>
          <ListStyle>Корзина</ListStyle>
          <ListStyle>Контакты</ListStyle>
        </LinkStyle>  
        
        <UlStyle>
          <ListStyle>Условия сервиса</ListStyle>
          <ListStyle></ListStyle>
          <LangStyle>
            <ListStyle>🌐</ListStyle>
            <ListStyle>Uzb</ListStyle>
            <ListStyle><b>Рус</b></ListStyle>
            <ListStyle>Eng</ListStyle>
          </LangStyle>
          <ListStyle></ListStyle>

        </UlStyle>

        <SocialStyle>
          <ListStyle><FaInstagram size={27}/></ListStyle>
          <ListStyle><FaTelegram size={27} /></ListStyle>
          <ListStyle><FaYoutube size={27} /></ListStyle>
          <ListStyle><FaTwitter size={27} /></ListStyle>
        </SocialStyle>

      </FooterStyle>
    </Center>
  )
}

export default Footer
