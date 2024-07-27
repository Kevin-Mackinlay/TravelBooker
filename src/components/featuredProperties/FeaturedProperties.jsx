import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fProperties">
      <div className="fPropertiesItem">
        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="fPropertiesImg" />
        <span className="fPropertyName">Hotel Maestro</span>
        <span className="fPropertyCity">Buenos Aires</span>
        <span className="fPropertyPrice">Starting from $180</span>
        <div className="fPropertyRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
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