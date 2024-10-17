import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import Field from '../Field'
import {v4 as uuid} from 'uuid';

import './Form.css'
import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import { ITeam } from '../../shared/interfaces/ITeam';

interface FormProps {
  handleCollaboratorRegistered: (collaborator: ICollaborator) => void
  handleTeamRegistred: (team: ITeam) => void
  teams: string[]
}

const Form = ({ handleCollaboratorRegistered, handleTeamRegistred, teams }: FormProps) => {
  
  const [valueNome, setNome] = useState('')
  const [valueCargo, setCargo] = useState('');
  const [valueImagem, setImagem] = useState('');
  const [valueTime, setTime] = useState('');
  
  const [valueTeamName, setTeamName] = useState('');
  const [valueTeamColor, setTeamColor] = useState('');

  const handleSubmitCollaborator = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    handleCollaboratorRegistered({
      id: uuid(),
      valueNome: valueNome, 
      valueCargo: valueCargo, 
      valueImagem: valueImagem, 
      valueTime: valueTime
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const handleSubmitTeam = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleTeamRegistred({
      'id': uuid(),
      'teamName': valueTeamName,
      'teamColor': valueTeamColor,
    })

    setTeamName('')
    setTeamColor('')
  }
  
  return (
    <section className='form'>
      <form onSubmit={handleSubmitCollaborator}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <Field 
          label="Nome" 
          placeholder="Digite seu nome" 
          value={valueNome}
          handleChange={value => setNome(value)}
          required 
        />

        <Field 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          value={valueCargo}
          handleChange={value => setCargo(value)}
          required 
        />

        <Field 
          label="Imagem" 
          value={valueImagem}
          handleChange={value => setImagem(value)}
          placeholder="Informe o endereço da imagem" 
        />

        <Dropdown 
          label="Time" 
          itens={teams} 
          required={true}
          value={valueTime}
          handleChange={value => setTime(value)} 
        />

        <Button>
          Criar card
        </Button>
      </form>
      
      <form onSubmit={handleSubmitTeam}>
        <h2>Preencha os dados para criar um novo time</h2>

        <Field 
          label="Nome do time" 
          placeholder="Digite o nome do time" 
          value={valueTeamName}
          handleChange={value => setTeamName(value)}
          required 
        />

        <Field 
          label="Cor do time" 
          fieldType='color'
          placeholder="Digite a cor do time" 
          value={valueTeamColor}
          handleChange={value => setTeamColor(value)}
          required 
        />

        <Button>
          Criar um novo time
        </Button>
      </form>
    </section>
  )
}

export default Form