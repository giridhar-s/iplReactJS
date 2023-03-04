import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <li>
        <img src={teamImageUrl} alt={name} className="team-image-url" />
        <h2 className="team-name">{name}</h2>
      </li>
    </Link>
  )
}

export default TeamCard
