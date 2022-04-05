import "./style.css";
const Produto = ({ produto, callBack }) => {
  return (
    <>
      <section className="sectionImg">
        <img src={produto.img} alt={produto.name} />
      </section>
      <section className="sectionDescricao">
        <h2>{produto.name}</h2>
        <p>{produto.category}</p>
        <h3>R$ {produto.price},00</h3>
        <button id={produto.id} onClick={() => callBack(produto)}>
          Adicionar
        </button>
      </section>
    </>
  );
};
export default Produto;
