import { useState } from "react";
import "./style.css";
const InputSearch = ({ listPorducts, callBackProdutosFiltrados }) => {
  const [value, setValue] = useState("");
  const listaOriginal = [...listPorducts];
  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        value={value}
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => {
          setValue(e.target.value);
          if (value.length > 1) {
            callBackProdutosFiltrados(
              listPorducts.filter(
                (e) =>
                  e.name.toLowerCase().includes(value.toLowerCase()) ||
                  e.category.toLowerCase().includes(value.toLowerCase())
              )
            );
          } else {
            callBackProdutosFiltrados(listaOriginal);
          }
        }}
      />
      <button
        onClick={() =>
          callBackProdutosFiltrados(
            listPorducts.filter(
              (e) =>
                e.name.toLowerCase().includes(value.toLowerCase()) ||
                e.category.toLowerCase().includes(value.toLowerCase())
            )
          )
        }
      >
        Pesquisar
      </button>
    </form>
  );
};
export default InputSearch;
