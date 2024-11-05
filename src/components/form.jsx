/* eslint-disable react/prop-types */
function Form({miniatura, setFormValues, submit}) {

    return (
        <div className="cadastro">
            
            <div className="field">
                <label>Marca:</label>
                <input type="text" placeholder="Marca" 
                    value={miniatura.marca || ""} onChange={(e) => setFormValues("marca", e.target.value)}/>
            </div>

            <div className="field">
                <label>Modelo:</label>
                <input type="text" placeholder="Modelo" 
                    value={miniatura.modelo || ""} onChange={(e) => setFormValues("modelo", e.target.value)}/>
            </div>

            <div className="field">
                <label>Escala:</label>
                <input type="text" placeholder="Escala"
                    value={miniatura.escala || ""} onChange={(e) => setFormValues("escala", e.target.value)}/>
            </div>

            <div className="field">
                <button onClick={() => submit()}>Salvar</button>
            </div>

        </div>
    );
}

export default Form;