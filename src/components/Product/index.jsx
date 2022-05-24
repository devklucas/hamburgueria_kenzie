import "./Product.css"
function Product({id,name,category,price,img,handleClick}){
    return(
        <li className="Card">
                <figure>
                    <img src={img} alt={name}/>
                </figure>
                <section>
                <h2>{name}</h2>
                <span>{category}</span>
                <p>{(price).toLocaleString("pt-br", {style: "currency",currency: "BRL"})}</p>
                <button onClick={()=>handleClick(id)}>Adicionar</button>
                </section>
        </li>
    )
}
export default Product