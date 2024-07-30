import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">La nube Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDet">
        <div className="siRating">
            <span>Excellent</span>
            <button>9.0</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$145</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>

        </div>
      </div>
    </div>
  );
}

export default SearchItem