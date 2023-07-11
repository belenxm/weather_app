import "./current-weather.css";

const CurrentWeather = () => {
  return  (
    <div className="weather">
        <div className="top">
            <div>
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img src="icons/01d.png" className="weather-icon" alt="weather" />
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value"> 22°C</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CurrentWeather;
