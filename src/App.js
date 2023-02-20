import Products from "./Products.js";
import "./App.css"
import Home from "./Home"
import Use from "./Use"
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
    <Use/>
    </div>
    


  );
}

export default App;
