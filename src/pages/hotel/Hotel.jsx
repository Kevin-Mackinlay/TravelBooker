import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { useState } from 'react';

const Hotel = () => {
  const[slideNumber, setSlideNumber] = useState(0);
  const[open, setOpen] = useState(false);

  const photos = [
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539620481.jpg?k=ad98fce8bd27f05b2e5ddf8816ff1fd2a9b12feb9e56a31247099f8e0ef4cf51&o=&hp=1' },
    { src: 'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/3770291/pexels-photo-3770291.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { src: 'https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

const handleOpen = (i) => {
  setSlideNumber(i);
  setOpen(true);
}

const handleMove = (direction) => {
  let newSlideNumber;
  if (direction === 'l') {
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  }else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  }
  setSlideNumber(newSlideNumber);

};
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('l')} />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Jackson St 1629 , Hollywood, Florida.</span>
          </div>
          <span className="hotelDistance">Excellent location – 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $125 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">A great City to stay</h1>
              <p className="hotelDesc">Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>Located in the real heart of Paris, this property has an excellent location score of 9.3!</span>
              <h2>
                <b>$1045</b> (5 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
