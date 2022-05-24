import Product from "../Product"
import "./ProductList.css"

function ProductList({products,handleClick}){
    return (
        <section className="boxContent">
            <ul className="boxVitrine">
                <>{products.map(item=><Product key={item.id}
                id={item.id} 
                name={item.name} 
                category={item.category} 
                price={item.price} 
                img={item.img}
                handleClick={handleClick}
                />)}
                </>    
            </ul>
        </section>
    )
}
export default ProductList