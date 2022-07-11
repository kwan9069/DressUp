import React from 'react';
import styled from 'styled-components';
import ResponsiveAppBar from '../components/appbar/ResponsiveAppBar';
import ProductInfo from '../components/product/ProductInfo';

const MainPageDiv = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  
`

const MainPage = () => {
  return (
    <MainPageDiv>
      <ResponsiveAppBar />
      <ProductInfo />
      <div >
        <br></br>
        <h4>DressUp</h4>
        <br></br>
      </div>
    </MainPageDiv>
	
  )
}

export default MainPage;