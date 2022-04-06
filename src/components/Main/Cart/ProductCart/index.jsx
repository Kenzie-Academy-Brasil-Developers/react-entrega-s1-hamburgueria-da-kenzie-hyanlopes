import "./style.css";
const AddInCart = ({ produto, callBack }) => {
  return (
    <li className="produtoDoCarrinho">
      <section className="produtoCartImg">
        <img src={produto.produto.img} alt="" />
      </section>
      <section className="produtoCartdescricao">
        <h3>{produto.produto.name}</h3>
        <p>{produto.produto.category}</p>
      </section>
      <section className="produtoCartRemove">
        <button onClick={() => callBack(produto)}>Remover</button>
        <p>{produto.quantity}</p>
      </section>
    </li>
  );
};
export default AddInCart;
