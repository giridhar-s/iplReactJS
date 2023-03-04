import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch/index'

import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatchesDetails: [],
    teamBannerUrl: '',
    backgroundColor: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const formattedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      matchStatus: latestMatchDetails.match_status,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
    }

    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatchesDetails: formattedRecentMatches,
      teamBannerUrl: data.team_banner_url,
      backgroundColor: id.toLowerCase(),
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      backgroundColor,
      latestMatchDetails,
      recentMatchesDetails,
      isLoading,
    } = this.state
    return (
      <div className={`team-matches-container ${backgroundColor}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="banner-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="team-banner"
              />
            </div>
            <LatestMatch
              latestMatch={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="match-cards-container">
              {recentMatchesDetails.map(eachRecentMatch => (
                <MatchCard
                  recentMatch={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
