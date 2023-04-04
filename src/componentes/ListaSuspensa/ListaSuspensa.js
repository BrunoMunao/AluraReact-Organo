import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const itemSelected = (event) => {
        props.onChange(event.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select required={props.obrigatorio} value={props.value} onChange={itemSelected}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa