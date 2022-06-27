import { Section } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../store/modules/Cart";

const Product = ({ product }) => {
  const { id, image, title, price } = product;
  const newTitle = title.split(" ").slice(0, 3).join(" ");
  const newPrice = price.toString().replaceAll(".", ",");

  const { cartAdd } = useContext(CartContext);

  return (
    <Section id={id}>
      <div className="container">
        <div className="itens">
          <img src={image} alt="" />
          <h4>{newTitle}</h4>
          <p>
            R$ {newPrice.toString().includes(",") ? newPrice : `${newPrice},00`}
          </p>
          <span
            onClick={() => cartAdd(product)}
            className="material-symbols-outlined"
          >
            add_shopping_cart
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Product;
