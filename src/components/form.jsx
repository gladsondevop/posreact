/* eslint-disable react/prop-types */
function Form({miniatura, setFormValues, submit}) {

    return (
        <div className="max-w-sm mx-auto mb-10">
            <div>
                <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Marca" required type="text" id="marca" 
                    value={miniatura.marca || ""} onChange={(e) => setFormValues("marca", e.target.value)}/>
            </div>

            <div>
                <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Modelo" required type="text" id="modelo" 
                    value={miniatura.modelo || ""} onChange={(e) => setFormValues("modelo", e.target.value)}/>
            </div>

            <div>
                <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Escala" required type="text" id="escala" 
                    value={miniatura.escala || ""} onChange={(e) => setFormValues("escala", e.target.value)}/>
            </div>
            <div className="mt-5">
                <button onClick={() => submit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
            </div>
        </div>
        
        
        
        // <div className="cadastro">
            
        //     <div className="field">
        //         <label>Marca:</label>
        //         <input type="text" placeholder="Marca" 
        //             value={miniatura.marca || ""} onChange={(e) => setFormValues("marca", e.target.value)}/>
        //     </div>

        //     <div className="field">
        //         <label>Modelo:</label>
        //         <input type="text" placeholder="Modelo" 
        //             value={miniatura.modelo || ""} onChange={(e) => setFormValues("modelo", e.target.value)}/>
        //     </div>

        //     <div className="field">
        //         <label>Escala:</label>
        //         <input type="text" placeholder="Escala"
        //             value={miniatura.escala || ""} onChange={(e) => setFormValues("escala", e.target.value)}/>
        //     </div>

        //     <div className="field">
        //         <button onClick={() => submit()}>Salvar</button>
        //     </div>

        // </div>
    );
}

export default Form;