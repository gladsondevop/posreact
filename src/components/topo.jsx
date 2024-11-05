/* eslint-disable react/prop-types */

import { FiPlus } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";

function Topo({show, act}) {
    return (
        <div className="topo">
            <button onClick={() => act(!show)}>
                <span>{show ? <FiPlus/> : <FaListUl/>}</span>
                {show ? "Cadastro" : "Lista"}
            </button>
        </div>
    );
}

export default Topo;