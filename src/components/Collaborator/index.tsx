import './Collaborator.css'
import { AiOutlineUserDelete  } from 'react-icons/ai'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'

interface CollaboratorProps {
  collaborator: ICollaborator
  teamColor: string
  handleDelete: (id: string) => void
  handleFavoriteCollaborator: (id: string) => void
}

const Collaborator = ({ 
    collaborator,
    teamColor,
    handleDelete,
    handleFavoriteCollaborator
  } : CollaboratorProps) => {
  
  // console.log('renderizando colaborador', collaborator);

  return (
    <div className='collaborator'>
      <button 
        type="button" 
        className='collaborator__delete' 
        onClick={ () => handleDelete(collaborator.id) } 
        title="Deletar colaborador">

        <AiOutlineUserDelete  />
      </button>
      <div className='collaborator__header' style={{ backgroundColor: teamColor }}>
        <img 
          className='collaborator__image' 
          src={collaborator.valueImagem}
          alt={collaborator.valueNome} />
      </div>
      <div className='collaborator__footer'>
        <h4 className='collaborator__name'>
          {collaborator.valueNome}
        </h4>
        <h5 className='collaborator__position'>
          {collaborator.valueCargo}
        </h5>

        <div className='favorite'>
          
          <button 
            type='button' 
            onClick={() => handleFavoriteCollaborator(collaborator.id) }
            title={collaborator.favorite ? 'Retirar dos favoritos' : 'Favoritar'}
          >
            {collaborator.favorite 
              ? <MdFavorite size={25} color='#ff0000' /> 
              : <MdFavoriteBorder size={25} /> 
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Collaborator