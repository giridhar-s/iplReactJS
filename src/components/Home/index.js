import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
      id: eachTeam.id,
    }))
    this.setState({teamCardsList: formattedData, isLoading: false})
  }

  renderTeamCardDetails = () => {
    const {teamCardsList} = this.state
    return (
      <ul className="team-details-container">
        {teamCardsList.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="responsive-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamCardDetails()
        )}
      </div>
    )
  }
}

export default Home
