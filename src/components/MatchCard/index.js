import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = recentMatch

  const matchStatusColor = matchStatus === 'Lost' ? 'lost' : 'win'

  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p className="competent-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
