import Logo from "./Logo";
import InputSearch from "./InputSearch";
import "./style.css";
const Header = ({ listPorducts, callBackProdutosFiltrados }) => {
  return (
    <header>
      <Logo />
      <InputSearch
        listPorducts={listPorducts}
        callBackProdutosFiltrados={callBackProdutosFiltrados}
      />
    </header>
  );
};
export default Header;
