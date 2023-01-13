import Card from "./components/Card";
import sofaImage from "./assets/sofa.svg";
import sofaGif from "./assets/sofa.gif";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card
        code="CÓDIGO: 42404"
        product="Sofá Margot II - Rosé"
        price="R$ 4.000"
        productImage={sofaImage}
        productGif={sofaGif}
      ></Card>
    </div>
  );
}

export default App;
