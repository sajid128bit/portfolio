import './index.css'
import {Component} from 'react'
import SocialMediaSection from '../SocialMediaSection/index'
import NavBar from '../NavBar/index'
import HomeSection from '../HomeSection/index'
import ProjectsSection from '../ProjectsSection'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class Portfolio extends Component {
  state = {name: 'HOME'}

  changeBody = () => {
    const {name} = this.state
    switch (name) {
      case 'ABOUT':
        return <AboutSection />
      case 'PROJECTS':
        return <ProjectsSection />
      case 'CONTACT':
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  changeState = name => {
    this.setState({name})
  }

  render() {
    const {name} = this.state
    return (
      <div className="portfolio-container">
        <div className="portfolio-navbar">
          <div className="div-nav-extra">
            <img
              src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
              alt="profile"
              className="navbar-profile"
            />
            <nav>
              {navBarItems.map(eachItem => (
                <NavBar
                  navBarItem={eachItem}
                  changeState={this.changeState}
                  key={eachItem.id}
                  currentname={name}
                />
              ))}
            </nav>
          </div>
        </div>
        <div className="portfolio-body">
          <div className="portfolio-changing">{this.changeBody()}</div>
          <div className="portfolio-social">
            <SocialMediaSection />
          </div>
        </div>
      </div>
    )
  }
}
export default Portfolio
