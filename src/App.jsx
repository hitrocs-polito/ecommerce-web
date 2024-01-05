import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import { CartContextProvider } from "./components/CartContext"
import { LikedContextProvider } from "./components/LikedContext"
import CategorySection from "./components/CategorySection"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartScreen from "./components/CartScreen"
import LikedScreen from "./components/LikedScreen"

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #EAEAEA;
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CartContextProvider>
      <LikedContextProvider>
        <Header />
        <Banner />
        <CategorySection />
        {/* <Products /> */}
        <Footer />
      </LikedContextProvider>
      </CartContextProvider>

      <Routes>
      <Route path="/liked" element={<LikedScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
