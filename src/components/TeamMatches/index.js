import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Cell, Legend} from 'recharts'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  getPieChartData = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    let won = 0
    let lost = 0
    let drawn = 0
    recentMatches.forEach(each => {
      if (each.matchStatus === 'Won') won += 1
      else if (each.matchStatus === 'Lost') lost += 1
      else drawn += 1
    })
    return [
      {name: 'Won', value: won},
      {name: 'Lost', value: lost},
      {name: 'Drawn', value: drawn},
    ]
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    const pieData = this.getPieChartData()
    const COLORS = ['#2DCA73', '#FF0000', '#FFCC00']
    return (
      <div className="team-matches-container">
        <Link to="/">
          <button type="button" className="back-button">
            Back
          </button>
        </Link>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <h1 className="recent-matches-heading">Recent Matches</h1>
        <ul className="recent-matches-list">
          {recentMatches.map(each => (
            <MatchCard key={each.id} matchDetails={each} />
          ))}
        </ul>
        <h1 className="statistics-heading">Statistics</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-matches-bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}
export default TeamMatches
