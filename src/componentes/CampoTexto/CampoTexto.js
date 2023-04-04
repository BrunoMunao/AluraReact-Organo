import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholder = `${props.placeholder}`

    const onType = (event) => {
        props.onChange(event.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.obrigatorio} placeholder={placeholder}/>
        </div>
    );
}

export default CampoTexto