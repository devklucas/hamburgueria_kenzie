import {useContext, createContext,useState,useEffect} from 'react'
import axios from 'axios'

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState()
    const [filterProducts,setFilterProducts] = useState()
    
    const getProducts = async () => {
        axios('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
        .then((response)=> {
            const date = response.data
            setProducts(date)
            setFilterProducts(date)
        })                
    }
    useEffect(()=>{
        getProducts()
    },[])
    
    const showProducts = (input) =>{
        const search = input.toLowerCase().trim()
        const newFilter = products.filter(item=> item.name.toLowerCase().includes(search) ? item : input === "" ? products : null)
        setFilterProducts(newFilter)
    }

    return(
        <ProductsContext.Provider value={{products,filterProducts, showProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProducts = () => useContext(ProductsContext)