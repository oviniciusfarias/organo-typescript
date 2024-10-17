import { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import { v4 as uuid } from 'uuid';
import Banner from './components/Banner'
import { ICollaborator } from './shared/interfaces/ICollaborator';
import { ITeam } from './shared/interfaces/ITeam';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState<ITeam[]>([
    {
      id: uuid(),
      teamName: 'Programação',
      teamColor: '#57C278',
    },
    {
      id: uuid(),
      teamName: 'Front-End',
      teamColor: '#82CFFA',
    },
    {
      id: uuid(),
      teamName: 'Data Science',
      teamColor: '#A6D157',
    },
    {
      id: uuid(),
      teamName: 'Devops',
      teamColor: '#E06B69',
    },
    {
      id: uuid(),
      teamName: 'UX e Design',
      teamColor: '#DB6EBF',
    },
    {
      id: uuid(),
      teamName: 'Mobile',
      teamColor: '#FFBA05',
    },
    {
      id: uuid(),
      teamName: 'Inovação e Gestão',
      teamColor: '#FF8A29',
    },
  ])

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[0].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[0].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[0].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[0].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[1].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[1].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[1].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[1].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[2].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[2].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[2].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[2].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[3].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[3].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[3].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[3].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[4].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[4].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[4].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[4].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[5].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[5].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[5].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[5].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Juliana Amoasei', 
      valueCargo: 'Desenvolvedora de software e instrutora', 
      valueImagem: '/images/collaborators/juliana.png', 
      valueTime: teams[6].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Daniel Artine', 
      valueCargo: 'Engenheiro de Software na Stone Age', 
      valueImagem: '/images/collaborators/daniel.png', 
      valueTime: teams[6].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Guilherme Lima', 
      valueCargo: 'Desenvolvedor Python e JavaScript na Alura', 
      valueImagem: '/images/collaborators/guilherme.png', 
      valueTime: teams[6].teamName,
      favorite: false
    },
    {
      id: uuid(),
      valueNome: 'Paulo Silveira', 
      valueCargo: 'Hipster e CEO da Alura', 
      valueImagem: '/images/collaborators/paulo.png', 
      valueTime: teams[6].teamName,
      favorite: false
    },

  ])
  
  const handleNewCollaborator = (collaborator: ICollaborator) => {
    console.log('new collaborator', collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  const handleNewTeam = (newTeam: ITeam) => {
    setTeams([...teams, newTeam])
  }

  const handleDeleteCollaborator = (collaboratorId: string) => {
    // console.log('Deletando colaborador', params)

    setCollaborators(collaborators.filter(collaborator => collaborator.id !== collaboratorId))
  }
  const handleFavoriteCollaborator = (collaboratorId: string) => {

    setCollaborators(collaborators.map(collaborator => {
      if (collaborator.id === collaboratorId) {
        console.log('colaborador favoritado: ', collaborator.valueNome)
        collaborator.favorite = !collaborator.favorite
      }

      return collaborator
    }))
  }

  const handleChangeTeamColor = (teamId: string, newTeamColor: string) => {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        team.teamColor = newTeamColor;
      }

      return team;
    }))
  }

  return (
    <div className="App">
      <Banner src='/images/banner.png' altText='O banner principal da página do Organo' />
      <Form
        handleCollaboratorRegistered={collaborator => handleNewCollaborator(collaborator)}
        handleTeamRegistred={team => handleNewTeam(team)}
        teams={teams.map(team => team.teamName)} />

      <div className='teams-container'>
        <h2 className='teams-container__title'>Minha organização</h2>
      </div>
      
      {teams.map((team) => {
        return <Team 
          key={team.teamName} 
          team={team} 
          teamColor={team.teamColor} 
          collaborators={collaborators.filter(collaborator => collaborator.valueTime === team.teamName)}
          handleDeleteCollaborator={handleDeleteCollaborator}
          handleFavoriteCollaborator={handleFavoriteCollaborator}
          handleChangeTeamColor={handleChangeTeamColor} />
      })}

      <Footer />
    </div>
  );
}

export default App;
