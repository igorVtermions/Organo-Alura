import Botao from '../Botao/index'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index.js'
import './Formulario.css'

const Formulario = () => {

    const times =[
        'programação',
        'front-end',
        'data science',
        'devops',
        'ux e design',
        'mobile',
        'inovação'
    ]

    const save = (event)=>{
        event.preventDefault()

        console.log('submit!!')
    }
    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    <p>Criar Card</p>
                </Botao>
            </form>
        </section>
    )
}

export default Formulario