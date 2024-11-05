import { Link } from "react-router-dom";

function Erro() {
    return (
        <div className="msgErro">
            <h2>Código inválido!</h2>
            <h5>Não foi possível localizar o cadastro da miniatura selecionada.</h5>
            <br/>
            <br/>
            <Link to="/">Voltar</Link>
        </div>
    );
}
export default Erro;