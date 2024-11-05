import { useNavigate } from "react-router-dom";
import { colunas } from "../config/colunas-tb-miniaturas";
import { FaEdit, FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
function Table ({miniaturas, delMiniatura}) {

    const navigate = useNavigate();

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
                    <div className="btn-edit">
                      <a onClick={() => navigate(`/detalhes/${item.id}`)}>
                        <span>{<FaEdit/>}</span>
                      </a>
                    </div>
                  </td>

                  <td>
                    <div className="btn-delete">
                      <a onClick={() => delMiniatura(item.id)}>
                        <span>{<FaTrash/>}</span>
                      </a>
                    </div>
                  </td>
                </tr>  
              ))}
            </tbody>
          </table>
        </div>
    );

}

export default Table;