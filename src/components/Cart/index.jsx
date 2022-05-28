import {Container,BoxTitle,BoxContentCart,ProductsCart,Product,EmptyCart,TotalPrice}from "./styles"
import {useCart} from '../../providers/cart'



const Cart = () => {
    const {currentSale,removeCart,cleanCart} = useCart()
    
    let total = currentSale.length > 0 ? currentSale.reduce((a,b)=>a+(b.price*b.qtd),0) : null

    return (
        <Container className="cartBox">
            <BoxTitle>
                 <h2>Carrinho de Compras</h2>
            </BoxTitle>
             <BoxContentCart>
                <ProductsCart>
                    {currentSale && currentSale.map((item,index)=> 
                        (
                        <Product key={index}>
                        <figure><img src={item.img} alt={item.name}/></figure>
                        <aside className="description">
                            <div>
                            <h3>{item.name}</h3>
                            <p>{item.qtd > 1 ? `Qtd: ${item.qtd}x` : null}</p>
                            <span>{item.category}</span>
                            </div>
                            <button onClick={()=>removeCart(item.id)}>Remover</button>
                        </aside>
                            
                            
                        </Product>
                        )
                     
                    )
                    }
                <>{currentSale.length === 0?
                <EmptyCart className="emptyCart">
                    <span>Sua sacola está vazia</span>
                    <p>Adicione itens</p>
                </EmptyCart>
                :
                <TotalPrice className="totalPrice">
                    <div>
                        <span>Total</span> 
                         <p>R${(total).toFixed(2)}</p> 
                    </div>
                    <button onClick={()=>cleanCart()}>REMOVER TODOS</button>
                </TotalPrice>}</> 
                </ProductsCart>
               
            </BoxContentCart> 
        </Container>        
    )
}
export default Cart
