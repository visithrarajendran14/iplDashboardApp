import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-left">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="latest-match-right">
        <p className="heading">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="heading">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="heading">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="heading">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
