import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
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
  } = latestMatch

  return (
    <div className="latest-match-container">
      <h1 className="latest-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-logo"
        />
      </div>
      <div className="more-details">
        <p className="label">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="label">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="label">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="label">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
