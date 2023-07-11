import { useState } from 'react'
import Botao from '../Botao/index'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index.js'
import './Formulario.css'

const Formulario = (props) => {

    const times =[
        'programação',
        'front-end',
        'data science',
        'devops',
        'ux e design',
        'mobile',
        'inovação'
    ]
    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    const [img, setImg] = useState('')
    const [team, setTeam] = useState('')


    const save = (event)=>{
       
        event.preventDefault()

        props.colaboradorCadastrado({
            name,
            post,
            img,
            team
        })
    }


    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" valor={name} altered={valor => setName(valor)}/>
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" valor={post} altered = {valor => setPost(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={img} altered={valor => setImg(valor)} />
                <ListaSuspensa label="Time" itens={times} valor={team} altered={valor => setTeam(valor)}/>
                <Botao>
                    <p>Criar Card</p>
                </Botao>
            </form>
        </section>
    )
}

export default Formulario