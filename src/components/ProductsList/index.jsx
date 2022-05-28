import { useProducts } from "../../providers/products";
import { useCart } from "../../providers/cart";
import {BoxContent,BoxVitrine} from './styles'

const ProductList = () => {
  const { filterProducts} = useProducts();
  const {handleClick} = useCart()
  return (
    <BoxContent>
      <BoxVitrine>
          {filterProducts && filterProducts.map((item)=>{
              return(<li className="Card" key={item.id}>
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <section>
                <h2>{item.name}</h2>
                <span>{item.category}</span>
                <p>
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button onClick={()=>handleClick(item)}>Adicionar</button>
              </section>
            </li>)
          })}
      </BoxVitrine>
    </BoxContent>
  );
};
export default ProductList;
