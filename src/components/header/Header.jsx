import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faSmile, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSmile} />
            <span>Atractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Travel Smart, Save Big.</h1>
        <p className="headerDesc">Get more from your travels – sign up for a free Hotel Hub account and save 10% or more.</p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  );
}

export default Header