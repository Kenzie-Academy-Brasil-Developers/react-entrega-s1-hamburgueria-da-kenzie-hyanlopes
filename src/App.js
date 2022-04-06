import Header from './components/Header';
import { useState, useEffect } from 'react';
import Main from "./components/Main"
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productCart, setProductCart] = useState([])
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
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
  function removeCart(product) {
    if (product.quantity === 1) {
      setProductCart(productCart.filter((e) => e !== product))
    } else {
      setProductCart([...productCart])
      productCart.forEach((e) => {
        if (e.produto === product.produto) {
          e.quantity--
        }
      })
    }
  }
  function removeAll() {
    setProductCart([])
  }
  return (
    <div className="App">
      <Header listPorducts={products} callBackProdutosFiltrados={setFilteredProducts} />
      <Main listaFiltroProdutos={filteredProducts} listaProdutos={products} callBack={addCart} listaCarrinho={productCart} callBackCart={removeCart} callBackRemoveAll={removeAll} />
    </div>
  );
}

export default App;
