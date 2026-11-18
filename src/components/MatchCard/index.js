import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  let statusClass = 'drawn'
  if (matchStatus === 'Won') {
    statusClass = 'won'
  } else if (matchStatus === 'Lost') {
    statusClass = 'lost'
  }

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
