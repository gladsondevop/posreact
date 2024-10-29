import { colunas } from "../config/colunas-tb-miniaturas";

/* eslint-disable react/prop-types */
function Table ({miniaturas, delMiniatura}) {

    return (
        <div className="container">
          <table>
            <thead>
              <tr>
                {colunas.miniaturas.map((col, i) => (
                  <th key={i}>{col}</th>  
                ))}
              </tr>
            </thead>
            <tbody>
              {miniaturas.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.escala}</td>

                  <td>
                    <a href="#">Editar</a>
                  </td>

                  <td>
                    <a href="#" onClick={() => delMiniatura(item.id)}>Excluir</a>
                  </td>
                </tr>  
              ))}
            </tbody>
          </table>
        </div>
    );

}

export default Table;