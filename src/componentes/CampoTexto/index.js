import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const toType = (event) => {
    props.altered(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={toType}
        required={props.required}
        placeholder={placeholderModificada}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
