import AddInCart from "../ProductCart";
import "./style.css";
const MontandoCarrinho = ({ listaCarrinho, callBack, callBackRemoveAll }) => {
  const totalPrice = listaCarrinho.reduce(
    (acc, e) => acc + Number(e.produto.price) * e.quantity,
    0
  );
  return (
    <section className="Carrinho">
      <aside className="CarrinhoTitulo">
        <h3>Carrinho de compras</h3>
      </aside>
      {listaCarrinho.length > 0 ? (
        <section className="CarrinhoCheio">
          <ul className="productInCart">
            {listaCarrinho.map((e) => (
              <AddInCart produto={e} callBack={callBack} />
            ))}
          </ul>
          <section className="sectionCarrinhoTotal">
            <aside className="CarrinhoTotal">
              <p className="total">Total</p>
              <p className="price">R$ {totalPrice.toFixed(2)}</p>
            </aside>
            <button onClick={callBackRemoveAll} className="RemoveAll">
              Remover todos
            </button>
          </section>
        </section>
      ) : (
        <section className="CarrinhoVazio">
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </section>
      )}
    </section>
  );
};
export default MontandoCarrinho;
