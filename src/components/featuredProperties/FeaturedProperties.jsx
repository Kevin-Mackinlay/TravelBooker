import './featuredProperties.css'
import {Link} from 'react-router-dom'

const FeaturedProperties = () => {
  return (
    <div className="fProperties">
      <div className="fPropertiesItem">
        <Link to="/hotel/1" className="fPropertiesLink">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539620481.jpg?k=ad98fce8bd27f05b2e5ddf8816ff1fd2a9b12feb9e56a31247099f8e0ef4cf51&o=&hp=1" alt="" className="fPropertiesImg" />
        <span className="fPropertyName">Grand Hotel</span>
        <span className="fPropertyCity">Hollywood</span>
        <span className="fPropertyPrice">Starting from $180</span>
        <div className="fPropertyRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
        </Link>
      </div>
      <div className="fPropertiesItem">
        <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="fPropertiesImg" />
        <span className="fPropertyName">Hotel North</span>
        <span className="fPropertyCity">Barcelona</span>
        <span className="fPropertyPrice">Starting from $150</span>
        <div className="fPropertyRating">
          <button>8.0</button>
          <span>Very good</span>
        </div>
      </div>
      <div className="fPropertiesItem">
        <img src="https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="fPropertiesImg" />
        <span className="fPropertyName">Hotel South</span>
        <span className="fPropertyCity">London</span>
        <span className="fPropertyPrice">Starting from $140</span>
        <div className="fPropertyRating">
          <button>8.0</button>
          <span>Very good</span>
        </div>
      </div>
      <div className="fPropertiesItem">
        <img src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="fPropertiesImg" />
        <span className="fPropertyName">Hotel East</span>
        <span className="fPropertyCity">Rio de Janeiro</span>
        <span className="fPropertyPrice">Starting from $180</span>
        <div className="fPropertyRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties