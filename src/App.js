import logo from './logo.svg';
import './App.css';
import { ReactComponent as Svg } from "./texto.svg";
import { ReactComponent as Svg2 } from "./campoNoche.svg";

function App() {
  return (<>
    <div className="container">
      <Svg2 className="dibujo"/>

      <div className="city">Vancouver</div>
      <div className="temp">18º</div>
      <div className="state">Despejado</div>
    </div>
  </>
  );
}

export default App;
