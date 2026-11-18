import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
