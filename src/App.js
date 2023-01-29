import Products from "./Products.js";
import "./App.css"
import Home from "./Home"

function App() {
  return (
    <div>
    <Products name='Iphone' 
    description='best phone' 
    price={120000}
    />
    <Products name='samsung' 
    description='good phone' 
    price={120000}
    />
    <Products name='oneplus' 
    description='best android phone' 
    price={120000}
    />
    <Home/>
    </div>
    


  );
}

export default App;
