import './App.css';
import ButtonPersonalize from './components/ButtonPersonalize';
import Resume from './components/Resume';
import ButtonSistem from './components/ButtonSistem';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Nome Produto</h1>
        <h3>Modelo Produto</h3>
      </div>
      <div className="product">
        <ButtonSistem intent="none" active={false} text="Modelo" />
        <div className="productPage">
          Produto
          <img
            className="imgProduct"
            src="/assets/imgproducts/32P-avengers.png"
          ></img>
        </div>
        <ButtonPersonalize />
      </div>
      <Resume></Resume>
    </div>
  );
}

export default App;
