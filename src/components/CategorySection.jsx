import { useState } from 'react';
import phoneDatabase from '../database/products';
import Center from './Center';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  font-family: 'Montserrat';
  margin-top: 20px;

`
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 20px 0;
  font-family: 'Montserrat';
`
const CategoryDesign = styled.div`
  display: flex;
  gap: 10px 30px;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin: 0 0 20px 0;
`

const ModelDesign = styled.div`
  button{
    padding: 5px 30px;
    border-radius: 50px;
    border: 0.1px solid black;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Montserrat';
    background-color: ${(props) => props.isSelected ? '#FFA542' : 'white'};

  }
`



const CategorySection = () => {
  const [selectedModel, setSelectedModel] = useState('Все');
  const [filteredPhones, setFilteredPhones] = useState(phoneDatabase);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setFilteredPhones(phoneDatabase.filter((phone) => phone.model === model));
    setSelectedButton(model);
  };

  

  return (
    <Center>
      <Title>Категории</Title>
      <CategoryDesign>
        <ModelDesign isSelected={selectedButton === 'Apple'}><button onClick={() => handleModelClick('Apple')}>Apple</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Xiaomi'}><button onClick={() => handleModelClick('Xiaomi')}>Xiaomi</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Samsung'}><button onClick={() => handleModelClick('Samsung')}>Samsung</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Oneplus'}><button onClick={() => handleModelClick('Oneplus')}>OnePlus</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'LG'}><button onClick={() => handleModelClick('LG')}>LG</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Motorola'}><button onClick={() => handleModelClick('Motorola')}>Motorola</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Sony'}><button onClick={() => handleModelClick('Sony')}>Sony</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Huawei'}><button onClick={() => handleModelClick('Huawei')}>Huawei</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Vivo'}><button onClick={() => handleModelClick('Vivo')}>Vivo</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Asus'}><button onClick={() => handleModelClick('Asus')}>Asus</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Artel'}><button onClick={() => handleModelClick('Artel')}>Artel</button></ModelDesign>
        <ModelDesign isSelected={selectedButton === 'Novey'}><button onClick={() => handleModelClick('Novey')}>Novey</button></ModelDesign>

      </CategoryDesign>
      <hr />
      

      <Title>{selectedModel} телефоны</Title>
      <ProductsGrid>
        {filteredPhones.map(product => (
          <ProductCard key={product.id} {...product} />
        )) }
      </ProductsGrid>

    </Center>
  );
};

export default CategorySection;