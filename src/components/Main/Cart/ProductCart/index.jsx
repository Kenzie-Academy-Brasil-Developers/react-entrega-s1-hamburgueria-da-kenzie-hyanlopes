import "./style.css";
const AddInCart = ({ produto }) => {
  return (
    <li className="produtoDoCarrinho">
      <section className="produtoCartImg">
        <img src={produto.produto.img} alt="" />
      </section>
      <section className="produtoCartdescricao">
        <h3>{produto.produto.name}</h3>
        <p>{produto.produto.category}</p>
      </section>
      <section>
        <button>Remover</button>
        <p>Qtd : {produto.quantity}</p>
      </section>
    </li>
  );
};
export default AddInCart;
