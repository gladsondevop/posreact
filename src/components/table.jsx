import { useNavigate } from "react-router-dom";
import { colunas } from "../config/colunas-tb-miniaturas";
import { FaEdit, FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
function Table ({miniaturas, delMiniatura}) {

    const navigate = useNavigate();

    return (


      <div className="relative overflow-x-auto mt-10 mb-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                  <tr>
                    {colunas.miniaturas.map((col, i) => (
                      <th key={i} scope="col" className="px-6 py-3">{col}</th>  
                    ))}
                    <th scope="col" className="px-1 "></th>  
                    <th scope="col" className="px-1 "></th>  
                  </tr>
                  
              </thead>
              <tbody>
                {miniaturas.map((item, i) => (
                  <tr key={i} className="bg-white border-b light:bg-gray-800 light:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                      {item.id}
                    </th>
                    <td className="px-6 py-4">
                      {item.marca}
                    </td>
                    <td className="px-6 py-4">
                      {item.modelo}
                    </td>
                    <td className="px-6 py-4">
                      {item.escala}
                    </td>
                    <td className="px-1">
                      <a onClick={() => navigate(`/detalhes/${item.id}`)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <span>{<FaEdit/>}</span>
                      </a>
                     
                   </td>

                   <td className="px-1">
                      <a onClick={() => delMiniatura(item.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <span>{<FaTrash/>}</span>
                      </a>
                   </td>
                  </tr>
                ))}
                  
              </tbody>
          </table>
      </div>

        // <div classNameName="container">
        //   <table>
        //     <thead>
        //       <tr>
        //         {colunas.miniaturas.map((col, i) => (
        //           <th key={i}>{col}</th>  
        //         ))}
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {miniaturas.map((item, i) => (
        //         <tr key={i}>
        //           <td>{item.id}</td>
        //           <td>{item.marca}</td>
        //           <td>{item.modelo}</td>
        //           <td>{item.escala}</td>

        //           <td>
        //             <div classNameName="btn-edit">
        //               <a onClick={() => navigate(`/detalhes/${item.id}`)}>
        //                 <span>{<FaEdit/>}</span>
        //               </a>
        //             </div>
        //           </td>

        //           <td>
        //             <div classNameName="btn-delete">
        //               <a onClick={() => delMiniatura(item.id)}>
        //                 <span>{<FaTrash/>}</span>
        //               </a>
        //             </div>
        //           </td>
        //         </tr>  
        //       ))}
        //     </tbody>
        //   </table>
        // </div>
    );

}

export default Table;