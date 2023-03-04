import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    venue,
    date,
    manOfTheMatch,
    umpires,
    result,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <h3 className="latest-match-heading">Latest Matches</h3>
      <div className="latest-match-details">
        <div className="section-1">
          <div className="competent-and-venue">
            <p className="competent-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="text-bold">{venue}</p>
            <p className="text-bold">{result}</p>
          </div>
          <div className="competent-logo-container">
            <img
              className="competent-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div className="section-2">
          <p className="heading">First Innings</p>
          <p className="text-bold">{firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="text-bold">{secondInnings}</p>
          <p className="heading">Man of The Match</p>
          <p className="text-bold">{manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="text-bold">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
