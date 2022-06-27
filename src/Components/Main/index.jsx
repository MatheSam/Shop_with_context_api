import CartComponent from "../Cart";
import { Main } from "./style";

import { useContext } from "react";
import { ProductContext } from "../../store/modules/Product";
import Product from "./Product";

const MainPage = () => {
  const { product } = useContext(ProductContext);

  return (
    <Main>
      <CartComponent />
      <div className="backGround">
        <div className="products">
          {product?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </Main>
  );
};

export default MainPage;
