import ListaProdutos from "./ProductList/list";
import MontandoCarrinho from "./Cart/Cart";
import "./style.css";
const Main = ({
  listaProdutos,
  callBack,
  listaCarrinho,
  callBackCart,
  listaFiltroProdutos,
}) => {
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
        <MontandoCarrinho listaCarrinho={listaCarrinho} />
      </section>
    </main>
  );
};
export default Main;
