import { useState } from 'react'
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nickname, setNickname] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [boss, setBoss] = useState('')

    const bosses = [
        'NLucid',
        'NWill',
        'HLucid',
        'HWill',
        'HLotus',
        'HDamien',
        'VHilla'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form submitted! =>', nickname, job, image, boss)
        props.sendFormData(
            {
                nickname,
                job,
                image,
                boss
            }
        )
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Fill your MapleStory character data.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nickname*" 
                    placeholder="Nickname"
                    value={nickname}
                    onChange = {value => setNickname(value)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Job*" 
                    placeholder="Ex.: Evan"
                    value={job}                    
                    onChange = {value => setJob(value)} />
                <CampoTexto 
                    label="Class Image" 
                    placeholder="Image URL" 
                    value={image} 
                    onChange = {value => setImage(value)}/>
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Boss" 
                    itens={bosses}
                    value={boss}
                    onChange = {value => setBoss(value)}/>
                <Botao>Criar</Botao>
            </form>
        </section>
    );
}

export default Formulario