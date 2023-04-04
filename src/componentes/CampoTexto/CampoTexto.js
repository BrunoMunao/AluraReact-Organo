import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholder}/>
        </div>
    );
}

export default CampoTexto