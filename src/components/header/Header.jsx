import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faSmile, faTaxi } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')} `}</span>
            {openDate && <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText"> {`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>
                    -
                  </button>
                  <spam className="optionCounterNumber">{options.adult}</spam>
                  <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className="optionCounterButton " onClick={() => handleOption('children', 'd')}>
                    -
                  </button>
                  <spam className="optionCounterNumber">{options.children}</spam>
                  <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption('room', 'd')}>
                    -
                  </button>
                  <spam className="optionCounterNumber">{options.room}</spam>
                  <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
