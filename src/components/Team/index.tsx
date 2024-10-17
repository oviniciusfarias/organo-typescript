import Collaborator from '../Collaborator'
import hexToRgba from 'hex-to-rgba'
import './Team.css'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'
import { ITeam } from '../../shared/interfaces/ITeam'

interface TeamProps {
  teamColor: string
  collaborators: ICollaborator[]
  team: ITeam
  handleDeleteCollaborator: (id: string) => void
  handleChangeTeamColor: (id: string, value: string) => void
  handleFavoriteCollaborator: (id: string) => void
}

const Team = ({
  collaborators, 
  teamColor, 
  team, 
  handleDeleteCollaborator,
  handleChangeTeamColor,
  handleFavoriteCollaborator } : TeamProps) => {
  
  return (
    (collaborators.length > 0) ? 
      <section className='team' style={{ backgroundColor: hexToRgba(teamColor, 0.35) }}>
        
        <h3 style={{ borderColor: teamColor }}>
          {team.teamName}
        </h3>
        
        <input 
          value={teamColor} 
          type='color' 
          className='team__input-color' 
          onChange={event => handleChangeTeamColor(team.id, event.target.value)} />

        <div className='team__collaborators'>

          {collaborators.map(collaborator => {

            return (
              <Collaborator 
                key={collaborator.id}
                collaborator={collaborator}
                teamColor={teamColor}
                handleDelete={handleDeleteCollaborator}
                handleFavoriteCollaborator={handleFavoriteCollaborator} />
            )
          })}

        </div>
      </section>
    : <></>
  )
}

export default Team