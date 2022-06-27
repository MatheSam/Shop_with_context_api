import { CartProvider } from "./modules/Cart";
import { ProductProvider } from "./modules/Product";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>{children}</ProductProvider>
    </CartProvider>
  );
};

export default Providers;
