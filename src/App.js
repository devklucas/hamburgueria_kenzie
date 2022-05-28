import GlobalStyle from './styles/index'
import Cart           from './components/Cart';
import ProductList    from './components/ProductsList';
import { useProducts } from './providers/products';
import {BoxHeader,ContentHeader,FormStyled,MainContainer} from './styles'

const App = () => {
    const {products,showProducts} = useProducts()
    return (
    <>
         <GlobalStyle></GlobalStyle>
         <BoxHeader>
          <ContentHeader>
              <img src="./logo.svg" alt="logo"/>
              <FormStyled onChange={(e)=>showProducts(e.target.value)}>
                <input type="text" placeholder="Digitar Pesquisa"/>
                <button type="submit">Pesquisar</button>
              </FormStyled>
          </ContentHeader>
        </BoxHeader> 
        <MainContainer>
            <ProductList products={products}/>   
            <Cart/> 
        </MainContainer> 
    </>
  );
}

export default App;
