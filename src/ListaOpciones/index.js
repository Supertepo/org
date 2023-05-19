import "./ListaOpciones.css"
const ListaOpciones = () => {

    /*Metodo map -> arreglo.map((equipo, index) => {
        return <option></option>
    })*/
    const Equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devop",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {Equipos.map((equipo, index) => <option key={index}>{equipo}</option>
            )}
        </select>
    </div>
}
export default ListaOpciones