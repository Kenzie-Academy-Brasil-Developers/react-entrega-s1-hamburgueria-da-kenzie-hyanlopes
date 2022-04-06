import ListaProdutos from "./ProductList/list";
import MontandoCarrinho from "./Cart/Cart";
import { useState } from "react";
import "./style.css";
const Main = ({
  listaProdutos,
  callBack,
  listaCarrinho,
  callBackCart,
  listaFiltroProdutos,
  callBackRemoveAll,
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <main>
      <section className="main-ListaProdutos">
        <ListaProdutos
          produtoFiltrado={listaFiltroProdutos}
          produtos={listaProdutos}
          callBack={callBack}
        />
      </section>
      <section className="main-cartProducts">
        <MontandoCarrinho
          listaCarrinho={listaCarrinho}
          callBack={callBackCart}
          callBackRemoveAll={callBackRemoveAll}
        />
      </section>
    </main>
  );
};
export default Main;
