import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamDetails}) => {
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
