import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaborador] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
    </div>
  );
}

export default App;
