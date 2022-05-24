import './App.css';
import { useEffect }  from 'react';
import { useState }   from 'react';
import Cart           from './components/Cart';
import ProductList    from './components/ProductsList';

function App() {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  
  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
  })

  const handleClick = (productId)=>{
    let check = []
    currentSale.map(item=>item.id === productId ? check.push(item) : null)
    if(check.length===0){
      let filtro = products.find(item => item.id === productId ?  item : null)
      setCurrentSale([filtro,...currentSale])
    }  
  }

  const showProducts = (input) =>{
    const search = input.target.previousSibling.value
    products.filter(item=> item.name.toLowerCase() === search.toLowerCase().trim() ? setFilterProducts([item]) : search === "" ? setFilterProducts(products):null)
  }

  const removeCart = (productId)=>{
    const filtro = currentSale.filter(item=>item.id !== productId ? item : null)
    setCurrentSale(filtro)
  }
  const cleanCart = ()=>setCurrentSale([])
  
    return (
    <>
        <header className="boxHeader">
          <div>
              <img src="./logo.svg" alt="logo"/>
              <span>
                <input type="text" placeholder="Digitar Pesquisa"/>
                <button onClick={(evt)=>showProducts(evt)}>Pesquisar</button>
              </span>
          </div>
        </header>
        <main className='mainContainer'>
            <ProductList 
              products={filterProducts.length === 0 ? products : filterProducts}
              handleClick={handleClick}/>
            <Cart currentSale={currentSale} removeCart={removeCart} cleanCart={cleanCart}/>
        </main>
    </>
  );
}

export default App;
