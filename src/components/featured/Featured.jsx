import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/2516401/pexels-photo-2516401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Argentina</h1>
          <h2>345 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/2377441/pexels-photo-2377441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Sweden</h1>
          <h2>436 properties</h2>
        </div>
      </div>
      I
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/1791684/pexels-photo-1791684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Spain</h1>
          <h2>255 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>USA</h1>
          <h2>144 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
