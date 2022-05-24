import "./Cart.css"

function Cart({currentSale,removeCart,cleanCart}){

    let total ;
    if(currentSale.length === 0 ){
        total = 0
    }else{
    let arr = currentSale.map(item=> item.price)
    
    total = arr.reduce((a,b) => {return a+b} )
    }
    return (
        <section className="cartBox">
            <div className="boxTitle">
                 <h2>Carrinho de Compras</h2>
            </div>
            <div className="boxContentCar">
                <ul className="productsCart">
                    {currentSale.map(item=> 
                        (
                        <li key={item.id}>
                        <figure><img src={item.img} alt={item.name}/></figure>
                        <aside className="description">
                            <h3>{item.name}</h3>
                            <span>{item.category}</span>
                        </aside>
                        <button onClick={()=>removeCart(item.id)}>Remover</button>
                        </li>
                        )
                     
                    )
                }
                <>{currentSale.length === 0?
                <aside className="emptyCart">
                    <span>Sua sacola está vazia</span>
                    <p>Adicione itens</p>
                </aside>
                :
                <aside className="totalPrice">
                    <div>
                        <span>Total</span> 
                        <p>R${(total).toFixed(2)}</p>
                    </div>
                    <button onClick={()=>cleanCart()}>REMOVER TODOS</button>
                </aside>}</> 
                </ul>
               
            </div>
        </section>        
    )
}
export default Cart
