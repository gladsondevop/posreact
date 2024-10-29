import "./assets/styleGlobal.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="main">
        <div className="titlePage"></div>
        <div className="description"></div>

        <div className="menutable"></div>
        <div className="table">
          <table>
            <caption>Catálogo de Miniaturas</caption>
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Escala</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maisto</td>
                <td>Opala SS 4.1</td>
                <td>1/46</td>
              </tr>
              <tr>
                <td>Hot Wheels</td>
                <td>Dodge Charger</td>
                <td>1/64</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default App
