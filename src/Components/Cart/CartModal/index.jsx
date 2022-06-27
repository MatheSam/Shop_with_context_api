import * as React from "react";
import { useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { DivCarrinho } from "./style";

import { CartContext } from "../../../store/modules/Cart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#EBEAEF",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function CartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <Button onClick={handleOpen}>
        <h2>{cart.length > 0 && cart.length}</h2>
        <span className="material-symbols-outlined">
          add_shopping_cart
        </span>{" "}
        Carrinho
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Carrinho de compras</h3>
          {cart.map((el, index) => {
            const newTitle = el.title.split(" ").slice(0, 3).join(" ");
            const newPrice = el.price.toString().replaceAll(".", ",");
            return (
              <DivCarrinho key={index}>
                <img src={el.image} alt="" />
                <div>
                  <h4>{newTitle}</h4>
                  <p>R$ {newPrice}</p>
                </div>
                <span
                  onClick={() => removeFromCart(el.id)}
                  className="material-symbols-outlined"
                >
                  delete
                </span>
              </DivCarrinho>
            );
          })}
          <h4>
            Preço total: R${" "}
            {cart
              .reduce((acc, curr) => {
                return acc + curr.price;
              }, 0)
              .toFixed(2)}
          </h4>
        </Box>
      </Modal>
    </div>
  );
}
