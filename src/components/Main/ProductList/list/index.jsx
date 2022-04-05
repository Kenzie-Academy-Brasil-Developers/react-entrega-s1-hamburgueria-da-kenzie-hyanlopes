import Produto from "../products";
import "./style.css";
const ListaProdutos = ({ produtos, callBack, produtoFiltrado, value }) => {
  return (
    <ul className="vitrineProduct">
      {produtoFiltrado.length < 1
        ? produtos.map((e) => (
            <>
              <li key={e.id}>
                <Produto produto={e} callBack={callBack} />
              </li>
            </>
          ))
        : produtoFiltrado.map((e) => (
            <li key={e.id}>
              <Produto produto={e} callBack={callBack} />
            </li>
          ))}
    </ul>
  );
};
export default ListaProdutos;
