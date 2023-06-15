import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    
    const toType = (event)=>{
        console.log(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={toType} required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto