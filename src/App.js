import Header from './components/Header';
import { useState, useEffect } from 'react';
import Main from "./components/Main"
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productCart, setProductCart] = useState([])
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products").then((res) => res.json()).then((res) => setProducts(res))
  }, [])
  function addCart(product) {
    const verficandoExistencia = productCart.filter((e) => e.produto === product)
    if (verficandoExistencia.length < 1) {
      setProductCart([...productCart, {
        quantity: 1,
        produto: product
      }])
    } else {
      setProductCart([...productCart])
      productCart.forEach((e) => {
        if (e.produto === product) {
          e.quantity++
        }
      })

    }
  }
  return (
    <div className="App">
      <Header listPorducts={products} callBackProdutosFiltrados={setFilteredProducts} />
      <Main listaFiltroProdutos={filteredProducts} listaProdutos={products} callBack={addCart} listaCarrinho={productCart} callBackCart={addCart} />
    </div>
  );
}

export default App;
